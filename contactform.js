const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  const webAppURL = "https://script.google.com/macros/s/AKfycbxDfv2usUJddge2M-weam5IG4S_ApaAZOEANYLH97OHtBw9ETf4mhWAWuaQqZoeK-e6/exec";

  fetch(webAppURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(result => {
    alert("✅ Message sent successfully!");
    form.reset();
  })
  .catch(err => {
    console.error(err);
    alert("❌ Failed to send message");
  });
});