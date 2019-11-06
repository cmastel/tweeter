$(document).ready(function() {

  $("form, .new-tweet").submit(function(event) {
    event.preventDefault();
    
    console.log('Form submitted, performing ajax call...', event);
    $.ajax({
      method: 'POST',
      url: '/tweets/',
      data: $( this ).serialize()
    })
    .done(function() {
      alert( "data saved");
    });
  })

});
