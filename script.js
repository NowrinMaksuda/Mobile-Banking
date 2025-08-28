// login button functionality
document.getElementById('loginButton').addEventListener('click', function (e) {
  e.preventDefault();
  const mobileNumber = 01976371680;
  const pin = 1232;

  const mobileNumberValue = document.getElementById('mobile-number').value;
  const mobileNumberValueConverted = parseInt(mobileNumberValue);

  const pinNumberValue = document.getElementById('pin-number').value;

  const pinNumberValueConverted = parseInt(pinNumberValue);

  if (
    mobileNumberValueConverted === mobileNumber &&
    pinNumberValueConverted === pin
  ) {
    window.location.href = './home.html';
  } else {
    alert('Invalid Credentials!');
  }
});
