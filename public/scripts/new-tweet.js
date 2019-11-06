$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();
    
    $.ajax({
      method: 'POST',
      url: '/tweets/',
      data: $( this ).serialize(),
      // success: (data) => console.log( "data saved", data)
    })

  })

});
