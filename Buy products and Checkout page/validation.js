// Validate credit card number
var cardNumberInput = document.getElementById("card-number");
cardNumberInput.addEventListener("input", function() {
  var cardNumber = cardNumberInput.value.replace(/\D/g, "");
  if (cardNumber.length !== 16) {
    cardNumberInput.setCustomValidity("Credit card number must be 16 digits long");
  } else {
    cardNumberInput.setCustomValidity("");
  }
});

// Validate expiry date
var expiryDateInput = document.getElementById("expiry-date");
expiryDateInput.addEventListener("input", function() {
  var expiryDate = expiryDateInput.value.replace(/\D/g, "");
  if (expiryDate.length !== 4) {
    expiryDateInput.setCustomValidity("Expiry date must be in the format MM/YY");
  } else {
    expiryDateInput.setCustomValidity("");
  }
});

// Validate CVV number
var cvvInput = document.getElementById("cvv");
cvvInput.addEventListener("input", function() {
  var cvv = cvvInput.value.replace(/\D/g, "");
  if (cvv.length !== 3) {
    cvvInput.setCustomValidity("CVV number must be 3 digits long");
  } else {
    cvvInput.setCustomValidity("");
  }
});

// Validate phone number
var phoneNumberInput = document.getElementById("phone-number");
phoneNumberInput.addEventListener("input", function() {
  var phoneNumber = phoneNumberInput.value.replace(/\D/g, "");
  if (phoneNumber.length !== 10) {
    phoneNumberInput.setCustomValidity("Phone number must be 10 digits long");
  } else {
    phoneNumberInput.setCustomValidity("");
  }
});
