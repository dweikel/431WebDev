// ---------------------
// Request Data
// ---------------------

var json = (function () {
    var json = null;
    // JQuery Ajax Request Documentation: https://api.jquery.com/jquery.ajax/
    $.ajax({
        'async': false,
        'global': false,
        'url': 'http://mysafeinfo.com/api/data?list=dinosaurs&format=json',
        'dataType': 'json',
        'success': function (data) {
          json = data
        },
        'error': function(jqXHR, textStatus, errorThrown) {
          // alert('Danger Danger Danger')
          // debugger
          // return $("#dinosaurs").text(jqXHR.statusText);
          return $("#dinosaurs").text('Sorry!  There was an error requesting your data.')
        }
    });
    return json
})();

// ---------------------
// Manipulate Response Data
// ---------------------

// for(var i = 0; i < json.length; i++) {
//   debugger
//   // Object
//   console.log(json[i])
//   // Embedded Expression
//   console.log(json[i].url)
// }

// Option 1: Javascript for loop
for(var i = 0; i < json.length; i++) {
  // $('#dinosaurs').append('<li>' + json[i].nm + '</li>');
  $('#dinosaurs').append("<li class='dinosaur' id='" + json[i].nm + "'>" + json[i].nm + "</li>");
}

// Option 2: JQuery for loop
// $.each(json, function(index,value) {
//   $('#dinosaurs').append('<li>' + value.nm + '</li>');
// })

// Option 3: Underscore.js
// var template = dinosaurs.innerHTML;
// var shuffledDinosaurs = _.shuffle(json)
// target.innerHTML = _.template(template,{dinosaurs:shuffledDinosaurs});
