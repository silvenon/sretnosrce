(function() {

  var facts = document.querySelectorAll('.fact');
  var fact = facts[Math.floor(Math.random() * facts.length)];

  console.log(facts);

  fact.style.display = 'inline-block';

}());
