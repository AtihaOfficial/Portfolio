console.log("Contact form JS loaded");
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");
if (!form) {
  console.error("Form not found!");
} else {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formMsg.textContent = "Sending...";
    formMsg.style.color = "#0066cc";
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };


    
    const webAppURL = "https://script.google.com/macros/s/AKfycbz73nq8U53QMpaooUtDGaOgWEFHATSPCZNDgR5r14WfBXbFsrQJRl0e-VC6e1oIYCof/exec";

    fetch(webAppURL, {
      method: "POST",
      mode: "no-cors",  
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(() => {
        formMsg.textContent = "✅ Message sent successfully!";
        formMsg.style.color = "#28a745";
        form.reset();
      })
      .catch(err => {
        console.error(err);
        formMsg.textContent = "❌ Failed to send. Please try again.";
        formMsg.style.color = "#dc3545";
      });
  });
}
