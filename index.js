'use strict'

const canNotBePassword = ['senha', 'password', 'qwerty', 'abc123', '123123', '123456', '1234567', '12345678', '123456789']

const
    form = document.querySelector('.form'),
    inputName = document.querySelector('.name'),
    inputEmail = document.querySelector('.email'),
    inputPassword = document.querySelector('.password'),
    inputRepeatPassword = document.querySelector('.repeat-password'),
    nameErrorMessage = document.querySelector('.name-error-message'),
    emailErrorMessage = document.querySelector('.email-error-message'),
    passwordErrorMessage = document.querySelector('.password-error-message'),
    repeatPasswordErrorMessage = document.querySelector('.repeat-password-error-message')

const
    regexNoNumber = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
    regexValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

const
    sucessClass = 'input--sucess',
    errorClass = 'input--error'
      
const nameValidation = () => {
    const nameValue = inputName.value

    inputName.classList.remove(sucessClass)

    if (nameValue == '') {
        nameErrorMessage.title = 'Nome não pode estar vazio'
    
        inputName.classList.add(errorClass)

        return false
    } 

    if (nameValue.length < 3) {
        nameErrorMessage.title = 'Nome muito curto'

        inputName.classList.add(errorClass)

        return false
    }

    if (nameValue.length > 15) {
        nameErrorMessage.title = 'Nome muito longo'

        inputName.classList.add(errorClass)

        return false
    }

    if (!regexNoNumber.test(nameValue)) {
        nameErrorMessage.title = 'Nome não pode possuir números'

        inputName.classList.add(errorClass)

        return false
    }

    nameErrorMessage.title = ''

    inputName.classList.add(sucessClass)

    return true
}

const emailValidation = () => {
    const emailValue = inputEmail.value

    inputEmail.classList.remove(sucessClass)

    if (emailValue == '') {
        emailErrorMessage.title = 'Email não pode ser vazio'

        inputEmail.classList.add(errorClass)

        return false
    }

    if (!regexValidEmail.test(emailValue)) {
        emailErrorMessage.title = 'Insira um email válido'

        inputEmail.classList.add(errorClass)

        return false
    }

    emailErrorMessage.title = ''

    inputEmail.classList.add(sucessClass)

    return true
}

const passwordValidation = () => {
    const passwordValue = inputPassword.value

    inputPassword.classList.remove(sucessClass)

    if (passwordValue == '') {
        passwordErrorMessage.title = 'Senha não pode estar vázio'

        inputPassword.classList.add(errorClass)

        return false
    }

    if (passwordValue.length < 6 || passwordValue.length > 15) {
        passwordErrorMessage.title = 'Senha precisa estar entre 3 e 15 caractéres'

        inputPassword.classList.add(errorClass)

        return false
    }

    if (canNotBePassword.includes(passwordValue.toLowerCase())) {
        passwordErrorMessage.title = `Senha não pode ser ${passwordValue.toLowerCase()}`

        inputPassword.classList.add(errorClass)

        return false
    }

    passwordErrorMessage.title = ''

    inputPassword.classList.add(sucessClass)

    return true
}

const repeatPasswordValidation = () => {
    const repeatPasswordValue = inputRepeatPassword.value
    const passwordValue = inputPassword.value

    inputRepeatPassword.classList.remove(sucessClass)

    if (repeatPasswordValue == '' || repeatPasswordValue != passwordValue) {
        repeatPasswordErrorMessage.title = 'Senhas não são iguais'

        inputRepeatPassword.classList.add(errorClass)

        return false
    }

    repeatPasswordErrorMessage.title = ''

    inputRepeatPassword.classList.add(sucessClass)

    return true
}

const handleValidation = () => (nameValidation() && emailValidation() && passwordValidation() && repeatPasswordValidation()) && form.submit()


form.addEventListener('submit', (event) => {
    handleValidation()

    event.preventDefault()
})