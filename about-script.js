const form = $("#contact-form");

form.on('submit', function(event) {
    event.preventDefault();
    const serviceID = 'default_service';
    const templateID = 'template_ucdlqyh';
    
    emailjs.sendForm(serviceID, templateID, this).then(() => {
        form[0].reset();
        console.log('the form has been reset')
    })
})

/*form.on("submit", form.html("<h3>Message sent</h3><br><p>Thank you!</p>")
)*/