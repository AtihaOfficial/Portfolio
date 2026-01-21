console.log("Contact form JS loaded");

const form = document.getElementById("contactForm");
if (!form) {
  console.error("Form not found!");
}
else {
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  const webAppURL = "https://script.google.com/macros/s/AKfycbwhVU_eI5N9sRbOpFEZLxq1-CFuh4d0kC-S_q2Qpb5HHJmvFs0E_-flu-fRNw0W7DU/exec";

  fetch(webAppURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(result => {
      console.log(result);

      if (result.success) {
        alert("✅ Message sent successfully!");
        form.reset();
      } else {
        alert("❌ Server error");
      }
    })
    .catch(err => {
      console.error(err);
      alert("❌ Network error");
    });
});
}