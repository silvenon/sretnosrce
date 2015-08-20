(function() {

  var par = document.querySelectorAll('main p');

  if (uQuery('email') === 'true') {
    par[par.length - 1].style.display = 'none';
  } else {
    par[par.length - 2].style.display = 'none';
  };

}());
