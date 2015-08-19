(function() {
  'use strict';

  var form = document.querySelector('.form');

  if (form) {
    var email = form.querySelector('[type="email"]');
    var checkbox = form.querySelector('[type="checkbox"]');

    var hidden = form.querySelectorAll('.email-hidden');
    var visible = form.querySelectorAll('.email-visible');

    console.log(hidden, visible);

    function updateState(emailExists) {
      if (emailExists) {
        checkbox.removeAttribute('disabled');
        Array.prototype.forEach.call(visible, function (el) {
          el.style.display = '';
        });
        Array.prototype.forEach.call(hidden, function (el) {
          el.style.display = 'none';
        });
      } else {
        checkbox.checked = true;
        checkbox.setAttribute('disabled', 'disabled');
        Array.prototype.forEach.call(visible, function (el) {
          el.style.display = 'none';
        });
        Array.prototype.forEach.call(hidden, function (el) {
          el.style.display = '';
        });
      }
    }

    updateState(false);

    email.addEventListener('keyup', function () {
      updateState(!!email.value);
    });
  }

}());
