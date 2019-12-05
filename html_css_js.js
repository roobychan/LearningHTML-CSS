$(function(){
  var tgFl = true;
  function reset () {
    $('#flow').animate({
      left: 0
    }); 
    tgFl = true;
  }
  $('#bg').click(function (e) {
    reset();
    $('#main').animate({
      height: '+=50px',
      width: '+=30px'
    }, 'slow'); 
    e.preventDefault();
  });
  $('#sm').click(function (e) { 
    reset();
    $('#main').animate({
      height: '-=50px',
      width: '-=30px'
    }); 
    e.preventDefault();
  });
  $('#rst').click(function (e) { 
    reset();
    $('#main').animate({
      height: '700px',
      width: '500px'
    }); 
    e.preventDefault();
  }); 
  $('#toggle').click(function (e) { 
    var width = $("#fl1").width();
    if (tgFl === true) {
      width = 0 - width; 
    } else {
      width = 0;
    }
    tgFl = !tgFl;
    $('#flow').animate({
      left: width
    }); 
    e.preventDefault();
  }); 
});