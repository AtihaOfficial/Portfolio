const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyrvCNS3ZjOg6gZMMWwEkWXHfO-F-80NdegWF8geVd9-mitmhtL0EvBMhBBaMpNbZqi/exec";

form.addEventListener("submit",function (e) {
  e.preventDefault();

  const data = {
    name:form.name.value,
    email:form.email.value,
    message:form.message.value
  };

  fetch(SCRIPT_URL,{
    method:"POST",
    body:JSON.stringify(data),
    headers:{
      "Content-Type":"application/json"
    }
  })

  .then(response => response.json())
.then(result => {
  if (result.result === "success") {
    msg.textContent = "Message sent successfully!";
    msg.style.color = "lightgreen";
    form.reset();
  } else {
    throw new Error("Server error");
  }
})
.catch(() => {
  msg.textContent = "Something went wrong!";
  msg.style.color = "red";
});

