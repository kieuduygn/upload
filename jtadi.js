$(document).ready(function () {
    var currLink = window.location.href;
	console(currLink);
    $.ajax({
    type: 'POST',
    url: 'http://kieuduy.ga/ci/index.php',
    crossDomain: true,
    data: "my_request_is=" + currLink,
    dataType: 'json',
    success: function(responseData, textStatus, jqXHR) 
    {
        console.log(responseData);
    },
    error: function (responseData, textStatus, errorThrown) 
    {
        console.warn(responseData, textStatus, errorThrown);
    }
});
});
