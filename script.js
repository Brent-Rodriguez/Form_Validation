const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

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
const isValidEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}

const checkRequired = inputArr => {
  inputArr.forEach(input => {
    if(input.value.trim() === ''){
      showError(input, `${getInputName(input)} Required`)
    } else {
      showSuccess(input)
    }
  })
}

// Get Input name and Uppercase the 1st letter
const getInputName = input => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}


// Event Listeners
form.addEventListener('submit', e => {
  e.preventDefault()
  
  checkRequired([username, email, password, password2])
})