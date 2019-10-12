export function validateUsername(username) {
  let error = '';
  const illegalChars = /\W/; // allow letters, numbers, and underscores
  if (username === '') {
    error = 'Enter an username!';
  } else if (username.length < 3) {
    error = 'Give yourself a longer name';
  } else if (username.length > 20) {
    error = 'Give yourself a shorter name';
  } else if (illegalChars.test(username) === true) {
    error = 'Your username contains illegal characters.';
  }
  return error;
}

export function validatePassword(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password);
}

export function validateEmail(email) {
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email);
}
