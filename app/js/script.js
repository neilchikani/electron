$(document).ready(function () {
  $('.user-authentication').on("click",'a',function (event) {
    event.preventDefault();
    var currentId = $(this).attr('data-id');
    if(currentId){
      $(".user-authentication form").fadeOut(100);
      $('form[data-show="'+currentId+'"]').delay(100).fadeIn(100);
      $('.user-authentication a').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    }
  });
});