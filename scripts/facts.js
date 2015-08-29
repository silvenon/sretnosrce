(function() {

  var container = document.querySelector('.facts');
  var facts = container.querySelectorAll('.fact');
  var fact = facts[Math.floor(Math.random() * facts.length)];

  fact.style.display = 'inline-block';
  container.classList.remove('loading');

}());
