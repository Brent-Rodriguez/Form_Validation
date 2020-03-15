const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('confirmation')

// Show Input Error
const showError = (input, message) => {
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message
}

// Show Input Success
const showSuccess = input => {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

// Check Email
const checkEmail = input => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(input.value.trim())){
    showSuccess(input)
  } else {
    showError(input, 'Email is Not valid')
  }
}

// Check required feilds
const checkRequired = inputArr => {
  inputArr.forEach(input => {
    if(input.value.trim() === ''){
      showError(input, `${getInputName(input)} Required`)
    } else {
      showSuccess(input)
    }
  })
}

// Check Input Length
const checkLength = (input, min, max) => {
  if(input.value.length < min){
    showError(input, `${getInputName(input)} - Min ${min} Characters`)
  } else if(input.value.length > max){
    showError(input, `${getInputName(input)} - Max ${max} Characters`)
  } else {
    showSuccess(input)
  }
}

// Check Passwords match
const passwordMatch = (input1, input2) => {
  if(input1.value !== input2.value) {
    showError(input2, 'Passwords do not match')
  }
}

// Get Input name and Uppercase the 1st letter
const getInputName = input => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// Event Listeners
form.addEventListener('submit', e => {
  e.preventDefault()
  
  checkRequired([username, email, password, passwordConfirmation])
  checkLength(username, 3, 15)
  checkLength(password, 6, 20)
  checkEmail(email)
  passwordMatch(password, passwordConfirmation)
})