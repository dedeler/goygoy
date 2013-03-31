$.fn.serializeObject = function()
{
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
    $('#submit').click(function(e) {
        e.preventDefault();
        var data = $('form').serializeObject();

        $.ajax({
            type: 'POST',
            url: 'api/goygoy',
            data: JSON.stringify(data),
            success: function(data, textStatus, jqXHR) {
                console.log(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            },
            dataType: 'json',
            contentType: 'application/json'
        });

        return false;
    });
});