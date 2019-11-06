$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();
    
    console.log('Form submitted, performing ajax call...', $( this ).serialize());
    $.ajax({
      method: 'POST',
      url: '/tweets/',
      data: $( this ).serialize(),
      success: (data) => console.log( "data saved", data)
    })
    // .done(function(err,test,data) {
    //   console.log( "data saved", data.body);
    // });
  })

});
