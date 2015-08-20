(function() {

  var form = document.querySelector('.form');
  var email = form.querySelector('[type="email"]');
  var checkbox = form.querySelector('[type="checkbox"]');
  var thanks = form.querySelector('[name="_next"]');
  var hidden = form.querySelectorAll('.email-hidden');
  var visible = form.querySelectorAll('.email-visible');
  var thanksBase;

  function forEach(elements, fn) {
    for (var i = 0; i < elements.length; i++) {
      fn(elements[i]);
    }
  }

  function updateState(emailExists) {
    if (emailExists) {
      checkbox.removeAttribute('disabled');
      forEach(visible, function (el) { el.style.display = ''; });
      forEach(hidden,  function (el) { el.style.display = 'none'; });
      thanks.value = thanksBase + 'true';
    } else {
      checkbox.checked = true;
      checkbox.setAttribute('disabled', 'disabled');
      forEach(visible, function (el) { el.style.display = 'none'; });
      forEach(hidden,  function (el) { el.style.display = ''; });
      thanks.value = thanksBase + 'false';
    }
  }

  thanks.value = thanks.value + '?email=';
  thanksBase = thanks.value;

  updateState(false);

  email.addEventListener('keyup', function () {
    updateState(!!email.value);
  });

}());
