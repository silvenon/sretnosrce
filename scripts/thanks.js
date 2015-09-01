(function() {

  var par = document.querySelectorAll('main p');
  var parToRemove;

  if (uQuery('email') === 'true') {
    parToRemove = par[par.length - 1];
  } else {
    parToRemove = par[par.length - 2];
  };

  parToRemove.parentNode.removeChild(parToRemove);

}());
