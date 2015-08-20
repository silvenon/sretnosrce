(function() {

  var form = document.querySelector('.form');
  var email = form.querySelector('[type="email"]');
  var checkbox = form.querySelector('[type="checkbox"]');
  var hidden = form.querySelectorAll('.email-hidden');
  var visible = form.querySelectorAll('.email-visible');
  var forEach = Array.prototype.forEach.call;

  function updateState(emailExists) {
    if (emailExists) {
      checkbox.removeAttribute('disabled');
      forEach(visible, function (el) { el.style.display = ''; });
      forEach(hidden,  function (el) { el.style.display = 'none'; });
    } else {
      checkbox.checked = true;
      checkbox.setAttribute('disabled', 'disabled');
      forEach(visible, function (el) { el.style.display = 'none'; });
      forEach(hidden,  function (el) { el.style.display = ''; });
    }
  }

  updateState(false);

  email.addEventListener('keyup', function () {
    updateState(!!email.value);
  });

}());
