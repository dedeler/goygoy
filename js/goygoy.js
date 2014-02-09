/*
This file is part of Goygoycumuyuz.biz.

Goygoycumuyuz.biz is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Goygoycumuyuz.biz is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Goygoycumuyuz.biz.  If not, see <http://www.gnu.org/licenses/>.
*/

'use strict';

$.fn.serializeObject = function(){
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name] !== undefined) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};

$(function() {

  var API_URL = "http://78.47.61.164:3169/";

  // populate company names
  $.getJSON(API_URL + 'api/companies', function(response){

    response = JSON.parse(response);
    var companies = {};//used when retrieving `jobs` array

    //construct `companies` and `companyData` at once
    var companyData = response.data.map(function(company){
      companies[company.name] = company.jobs;

      return {
        id: company.name,
        text: company.name}
    });

    $('#company').select2({
      data: companyData,
      allowClear: false,
      formatNoMatches: function(term) {
        return '<strong>' + term + '</strong> diye bi şirket yok ama istersen ekleyebiliriz, yukarı bak ↗';
      }
    })
    .select2('enable', true)
    
    .on('change', function(item) {
      newSelectionReset();

      var jobs = companies[ $(this).val() ];//jobs array
      var jobData = $.map(jobs, function(job){
        return {
          id: job.name,
          text: job.name}
      });

      $('#job').select2({
        data: jobData,
        allowClear: false,
      formatNoMatches: function(term) {
        return '<strong>' + term + '</strong> diye bi pozisyon yok ama istersen onu da ekleyebiliriz, yukarı bak ↗';
      }
      })
      .select2('enable', true)

      .on('change', function() {
        $('#year').removeAttr('readonly');
        $('#year').removeAttr('disabled');

        if(checkManager($(this).val())){
          $('#managerModal').modal('show');
        }
      });

    });

  });

  function newSelectionReset() {
    $('#job').select2('enable', false).select2("val", "");
    $('#year').val('').attr('readonly', 'true');
    $('#year').attr('disabled', 'true');
  };

  function reset() {
    $('#company').select2('enable', true).select2("val", "");
    $('#job').select2('enable', false).select2("val", "");
    $('#year').val('').attr('readonly', 'true');
    $('#year').attr('disabled', 'true');
    $('#resultContent').hide();
    $('#mainContent').show();
  };

  $('#back').click(reset);

  //prevent NaN input
  //Thanks: http://stackoverflow.com/a/3764841/878361
  var a = [];

  for (var i = 48; i < 58; i++){
    a.push(i);
  }

  $('#year').keypress(function(e) {
    var k = e.which;
    if (!(a.indexOf(k)>=0)){
      e.preventDefault();
    }
  });
  //end of prevent NaN input

  $('#submit').click(function(e) {

    $(this).button('loading');

    e.preventDefault();
    var data = $('form').serializeObject();

    //validation
    if( !data.hasOwnProperty('company') || !data.hasOwnProperty('job') || !data.hasOwnProperty('year')||
      data.company.trim() == "" || data.job.trim() == "" || data.year.trim() == "" || 
      !isFinite(data.year) || data.year < 0)
    {
      $('#validationErrorModal').modal('show');
      return;
    }

    $.ajax({
      type: 'post',
      url: API_URL + 'api/goygoy',
      data: JSON.stringify(data),
      dataType: 'json',
      contentType: 'application/json',
      success: function(response, textStatus, jqXHR) {

        if(response.success === true){
          $('#mainContent').hide();

          $('#resultText').text(response.data.message);
          $('#resultPoint').text(response.data.point);
          var textMsg = '%25' + response.data.point + ' goygoycusun.' + response.data.message;
          $('#tweetButton').attr('href', "https://twitter.com/share?hashtags=goygoycu&text=" + textMsg + "&url=http://goygoycumuyuz.biz");
          $('#facebookButton').attr('href', "https://www.facebook.com/dialog/feed?app_id=334707233318136"+
            "&redirect_uri=http://goygoycumuyuz.biz/index.html"+
            "&name=Goygoycu%20muyuz?"+
            "&link=http://goygoycumuyuz.biz/"+
            "&picture=http://static.ddmcdn.com/gif/ebitda1.jpg"+
            "&caption=Yüzde "+response.data.point+" oranında goygoycusun.&description="+response.data.message);
          $('#resultContent').show();
        }
        else{
          $('#alertMessage').text(response.message || "Everything is something happened!");
          $('#alertModal').modal('show');
        }
        $('#submit').button('reset');
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(errorThrown);
        $(this).button('reset');
      }
    });

    return false;
  });//end of submit click

  $('#validationErrorModal').on('hidden', function () {
    $('#submit').button('reset');
  });

  var managerJobList = ['müdür', 'direktör', 'patron', 'ortak', 'kurucu'];
  function checkManager(jobString) {
    for (var i = 0; i < managerJobList.length; ++i) {
      if(jobString.toLowerCase().indexOf(managerJobList[i]) > -1){
        return true;
      }
    }
    return false;
  }

  // submit on enter key
  $("form #year").keypress(function (e) {
    if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
      $('button[type=submit]').click();
      return false;
    } else {
      return true;
    }
  });

  // create a proxy click for our custom Linkedin share button.
  // Thanks http://blog.stchur.com/2010/01/15/programmatically-clicking-a-link-in-javascript/
  var proxyClickEvent = document.createEvent('MouseEvents');
  proxyClickEvent.initEvent('click' ,true ,true);

  $('#linkedinButton').click(function() {
    $('#linkedinGhostButtonContainer').find('a').first()[0].dispatchEvent(proxyClickEvent);
  });

});