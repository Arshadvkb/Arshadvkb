document.addEventListener("DOMContentLoaded", function() {
    const year = new Date().getFullYear();
    document.querySelector('#year').textContent = year;
});
function sendEmail() {
    var params={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    } 

 const serviceId="service_at5h4z8"
 const templateId="template_nuz04dv"

    emailjs.send(serviceId, templateId, params)
        .then(res=> {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            document.getElementById("subject").value = "";
            console.log(res);
            alert("Your message has been sent successfully!");
        })
        .catch(err => console.log(err));
 
}
