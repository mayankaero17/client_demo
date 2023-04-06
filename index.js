function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  Email.send({
    SecureToken: "d5845196-dfb1-4aa8-adec-2f51a5fee34f", //add your token here
    To: "mayankaero17@gmail.com",
    From: email,
    Subject: document.getElementById("subject").value,
    Body: "Name:" + name + "<br> Email :" + email + "<br> Message :" + message,
  }).then(function (response) {
    if (response === "OK") {
      alert("Email sent successfully!");
    } else {
      alert("Email failed to send. Please try again later.");
    }
  });
}
