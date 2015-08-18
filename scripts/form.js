(function() {
  'use strict';

  var form = document.querySelector('.form');

  if (form) {
    var email = form.querySelector('[type="email"]');
    var checkbox = form.querySelector('[type="checkbox"]');
    var description = form.querySelector('.form-checkbox .form-description');

    checkbox.setAttribute('disabled', 'disabled');

    email.addEventListener('keyup', function () {
      if (email.value) {
        checkbox.removeAttribute('disabled');
        description.style.display = 'none';
      } else {
        checkbox.checked = true;
        checkbox.setAttribute('disabled', 'disabled');
        description.style.display = '';
      }
    });
  }

}());
