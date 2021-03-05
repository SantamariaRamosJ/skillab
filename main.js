//form
$(document).ready(function() {
    $('.submit').click(function (event) {
        
        console.log('Clicked button')

        var name = $('.name').val()
        var email = $('.email').val()
        var subject = $('.subject').val()
        var textMessage = $('.textMessage').val()
        var statusName = $('.status-name')
        var statusEmail = $('.status-email')
        var statusSubject = $('.status-subject')
        var statusMessage= $('.status-message')

        statusName.empty()
        statusEmail.empty()
        statusSubject.empty()
        statusMessage.empty()


        if(name.length >= 2) {
            statusName.append('')
        } else {
            event.preventDefault()
            statusName.append('<div class="mt-0"><i class="error-valid fas fa-exclamation-circle"></i>Name is not valid</div>')
        }

        if(email.length > 2 && email.includes("@") && email.includes(".")) {
            statusEmail.append('')
        } else {
            event.preventDefault()
            statusEmail.append('<div class="mt-0"><i class=" error-valid fas fa-exclamation-circle"></i>Email is not valid</div>')
        }

        if(subject.length >= 2) {
            statusSubject.append('')
        } else {
            event.preventDefault()
            statusSubject.append('<div class="mt-0"><i class="error-valid fas fa-exclamation-circle"></i>Subject is not valid</div>')
        }

        if(textMessage.length >= 2) {
            statusMessage.append('')
        } else {
            event.preventDefault()
            statusMessage.append('<div class="mt-0"><i class=" error-valid fas fa-exclamation-circle"></i>Message is not valid</div>')
        }
    })
})
