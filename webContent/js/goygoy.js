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

  $.getJSON('api/companies', function(response){
    companies = response.data;
    var companyNames = Object.keys(response.data);

    $('#company').typeahead({
      source: companyNames,
      updater: function(item) {
        createJobInput();

        if(item.trim() == ""){
          $('#jobInputContainer input').attr('readonly', 'true');
        }
        else{
          $('#jobInputContainer input').removeAttr('readonly'); 
        }

        var jobs = companies[item];
        var jobNames = $.map(jobs, function(job, i) {
          return job.name;
        });

        $('#jobInputContainer input').typeahead({
          source: jobNames
        });
        return item;
      }
    });

    $('#company').removeAttr('readonly');
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
    if(data.company.trim() == "" || data.job.trim() == "" || data.year.trim() == "" || !isFinite(data.year) || data.year < 0){
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

          $('#resultContent').show();
        }
        else{

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
  $('input').val('');
  $('#resultContent').hide();
  $('#mainContent').show();
});

function createJobInput() {
  $('#job').remove();
  $('#jobInputContainer').html('<input class="input-xlarge" name="job" id="job" type="text" placeholder="Hangi pozisyonda" required readonly>');

  $('#job').change(function() {
    if($(this).val().trim() == ""){
      $('#year').attr('readonly', 'true');
    }
    else{
      $('#year').removeAttr('readonly'); 
    }
  });
}

});