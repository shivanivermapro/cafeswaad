const form = document.getElementById("bookingForm");
const messageEl = document.getElementById("formMessage");

if (form && messageEl) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    messageEl.textContent =
      "Thank you! This is a demo website – your booking was not actually sent.";
    messageEl.style.color = "#c96c38";
    form.reset();
  });
}
