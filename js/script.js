$(document).ready(function(){
    $('.single-item').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000
    });
    
  });


$.ajax ({

  xhrFields: {
    withCredentials:true
  },

  type: 'GET',
  url: 'js/json/project.json',
  contentType: 'application/json',
  data: JSON.stringify("{'data':'date-list'}"),
  success: function(data) {

    let article = document.getElementById('article');
    let title = document.getElementById('extra-info');
    
    article.innerHTML = data.News.article;
    title.innerHTML = data.News.title;

  },
  error: function(jqXhr, textStatus, errorThrown){
    console.log(null);
  }
}); 




window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  
  document.getElementById('top');
  document.getElementById("myBtn").style.display = "block";
} else {
  document.getElementById("myBtn").style.display = "none";
  }
};






/*  $('a[href*="#"]').on('click', function(e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    500,
    'linear'
  )
});  */


