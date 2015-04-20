$(function(){

  //open popup when the page is loaded
  $("#popup").modal('show');

  //arrows for checkboxes blocks
  $('.collapse').on('show.bs.collapse', function(){
      var i = $(this).parent().find('i')
      i.toggleClass('fa-chevron-up fa-chevron-down');
    }).on('hide.bs.collapse', function(){
      var i = $(this).parent().find('i')
      i.toggleClass('fa-chevron-down fa-chevron-up');
  });
    
  //change background when click on checkbox, activate button when one of the checkboxes choosen
  $('input[type="checkbox"]').click(function(){
    $(this).parent().toggleClass('bg-warning');
    if ($('[type="checkbox"]').is(":checked")) {
      $('#valmis').removeClass('disabled').addClass('active');
    } else {
      $('#valmis').removeClass('active').addClass('disabled');
    }
  });
  //you can't choose more then three checkboxes 
  
  function limitChecked( element, size ) {
    var bol = $( element + ':checked').length >= size;
    $(element).not(':checked').attr('disabled',bol);
  }
  // List of checkbox groups to check
  var check_elements = [
    { id: '.form1 input[type=checkbox]', size: 3 }
  ];
  // Run function for each group in list
  $(check_elements).each( function(index, element) {
    // Limit checked on window load
    $(window).load( function() {
      limitChecked( element.id, element.size );
    })
    // Limit checked on click
    $(element.id).click(function() {
      limitChecked( element.id, element.size );
    });
  });

  //count for chackboxes
  var count = 0; 
  updateCount(); 
  $('input[type=checkbox]').change(function() { 
    updateCount(this.checked ? 1 : -1); 
  });
  function updateCount(a) {
    count = a ? count + a : $('input[type=checkbox]:checked').length;
    $('#count').text(count);
  }
});