// ---------------------
// Request Data
// ---------------------

var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': 'http://mysafeinfo.com/api/data?list=beatlesalbums&format=json',
        'dataType': 'json',
        'success': function (data) {
          json = data;
        }
    });
	return json;
})();

$.each(json, function( index, value ) {
	console.log( value.typ );
});