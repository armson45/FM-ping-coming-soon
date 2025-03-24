/* 
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). 
      The message for this error should say *"Please provide a valid email address"*
*/

const $inputEmail = document.getElementById('email'),
  $submitBtn = document.getElementById('submit'),
  $form = document.querySelector('.send-email');
let invalidEmail = (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

$form.addEventListener('click', e => {
  if (!e.target.matches('.cta-btn')) return;
  e.preventDefault();

  !$inputEmail.value
    ? showErrorMessage($inputEmail.value.length)
    : showErrorMessage($inputEmail.value);
});

let showErrorMessage = (email) => {
  let $errorMsg = document.createElement('span');

  if (email === 0) {
    $errorMsg.textContent = 'Whoops! It looks like you forgot to add your email';
    addMsg($errorMsg);
  } else if (!invalidEmail.test(email)) {
    $errorMsg.textContent = 'Please provide a valid email address'
    addMsg($errorMsg);
  }

}

let addMsg = ($errorMsg) => {
  $errorMsg.classList.add('error-message');
  $inputEmail.style.border = '2px solid var(--light-red)';
  $form.insertAdjacentElement('beforeend', $errorMsg);

  setTimeout(() => {
    $errorMsg.remove();
    $inputEmail.style.border = '2px solid var(--pale-blue)';
    $inputEmail.value = null;
  }, 4000);
}