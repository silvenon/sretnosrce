(function() {

  var form = document.querySelector('.form');
  var question = form.querySelector('textarea');
  var checkbox = form.querySelector('[type="checkbox"]');
  var button = form.querySelector('[type="submit"]');

  // save form data in case of refresh or something
  if (window.localStorage) {
    question.value = localStorage.getItem('question');

    form.addEventListener('keyup', function (event) {
      localStorage.setItem('question', question.value);
    });

    form.addEventListener('submit', function () {
      localStorage.removeItem('question');
    });
  }

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      button.removeAttribute('disabled');
    } else {
      button.setAttribute('disabled', 'disabled');
    }
  });

}());
