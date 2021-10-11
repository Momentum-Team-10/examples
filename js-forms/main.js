let form = document.getElementById("login-form")
let emailInput = document.getElementById('email-input')
let checkinInput = document.getElementById('check-in')
let checkoutInput = document.getElementById('check-out')
let now = moment()

console.log(form)
console.log(emailInput)
console.log(now)

form.addEventListener('submit', (event) => {
    // form validation fuctions will live here
    event.preventDefault()
    validateEmail(emailInput)
    validateCheckin(checkinInput)
})


function validateCheckin (input) {
    let errorEl = document.createElement('p')
    errorEl.id = "checkin-error"
    console.log(input.value)
    // Cannot checkin before today
    if (moment(input.value).isBefore(now)) {
        errorEl.innerText = "You must choose a date after today"
        document.getElementById('check-in-div').appendChild(errorEl)
        console.log('date must be after today')
        checkinInput.classList.add('invalid')
    } else {
        if (document.getElementById('checkin-error')) {
            document.getElementById('checkin-error').remove()
        }
        checkinInput.classList.remove('invalid')
        checkinInput.classList.add('valid')
    }
    // Cannot checkout in under 5 days
    // Check in time no earlier than 1pm
    // Check out time no later than 10am
}

function validateEmail(input) {
    let errorEl = document.createElement('p')
    errorEl.id = 'email-error'

    let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regEx.test(input.value)) {
    console.log('test passed!')
    console.log(errorEl)
        // do something to show the user entered correct info
        input.classList.remove('invalid')
        input.classList.add('valid')
        document.getElementById('email-error').remove()

    } else if (input.value === "") {
        errorEl.innerText = 'Email is required'
        document.getElementById('email-div').appendChild(errorEl)
        input.classList.remove('valid')
    }
    
    else {
        // do something to show the user entered incorrect info
        if (document.getElementById('email-error')) {
            document.getElementById('email-error').remove()
        }
        errorEl.innerText = 'Must enter valid email address'
        document.getElementById('email-div').appendChild(errorEl)
        input.classList.remove('valid')
        input.classList.add('invalid')
    }
}