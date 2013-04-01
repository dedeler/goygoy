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

  var companies;
  var jobNames;

  $.getJSON('api/companies', function(response){
    companies = response.data;
    var companyNames = Object.keys(response.data);

    $('#company').typeahead({
      source: companyNames,
      minLength: 0,
      updater: function(item) {
        createJobInput();

        if(item.trim() == ""){
          $('#jobInputContainer input').attr('readonly', 'true');
          $('#jobInputContainer input').attr('disabled', 'true');
        }
        else{
          $('#jobInputContainer input').removeAttr('readonly');
          $('#jobInputContainer input').removeAttr('disabled');
        }

        var jobs = companies[item];
        jobNames = $.map(jobs, function(job, i) {
          return job.name;
        });

        $('#jobInputContainer input').typeahead({
          source: jobNames,
          minLength: 0
        });
        return item;
      }
    });

    $('#company').removeAttr('readonly');
  });

  $('#company').keyup(function() {
    if($(this).val().trim() == ""){
      $('#job').val('').attr('readonly', 'true');
      $('#year').val('').attr('readonly', 'true');
      $('#job').attr('disabled', 'true');
      $('#year').attr('disabled', 'true');
    }
  });

  $('#year').keypress(function(e) {//prevent NaN input
    //Thanks: http://stackoverflow.com/a/3764841/878361
    var a = [];
    var k = e.which;

    for (var i = 48; i < 58; i++){
      a.push(i);
    }

    if (!(a.indexOf(k)>=0)){
      e.preventDefault();
    }
  });

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
      url: 'api/goygoy',
      data: JSON.stringify(data),
      dataType: 'json',
      contentType: 'application/json',
      success: function(response, textStatus, jqXHR) {

        if(response.success === true){
          $('#mainContent').hide();

          $('#resultText').text(response.data.message);
          $('#resultPoint').text(response.data.point);

          $('#tweetButton').attr('href', "https://twitter.com/share?hashtags=goygoycu&text="+response.data.message+"&url=http://goygoycumuyuz.biz");
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

  $('#back').click(function() {
    $('input').val('').attr('readonly', 'true').attr('disabled', 'true');
    $('#company').removeAttr('readonly').removeAttr('disabled');
    $('#resultContent').hide();
    $('#mainContent').show();
  });

  $('#validationErrorModal').on('hidden', function () {
    $('#submit').button('reset');
  });

  function createJobInput() {
    $('#job').remove();
    $('#jobInputContainer').html('<input class="input-xlarge" name="job" id="job" type="text" placeholder="Hangi pozisyonda" required readonly disabled>');

    $('#job').change(function() {

      if( jobNames.indexOf($(this).val()) > -1 ){
        $('#year').removeAttr('readonly');
        $('#year').removeAttr('disabled');
      }
      else{
        $('#year').attr('readonly', 'true');
        $('#year').attr('disabled', 'true');
      }

      if(checkManager($(this).val())){
        $('#managerModal').modal('show');
      }
    });
  }

  var managerJobList = ['müdür', 'direktör', 'patron', 'ortak', 'kurucu'];
  function checkManager(jobString) {
    for (var i = 0; i < managerJobList.length; ++i) {
      if(jobString.toLowerCase().indexOf(managerJobList[i]) > -1){
        return true;
      }
    }
    return false;
  }

  $("form input").keypress(function (e) {
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