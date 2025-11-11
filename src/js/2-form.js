const storageKey = "feedback-form-state";

let formData = {
  email: "",
  message: "",
};

const form = document.querySelector(".feedback-form");

const savedData = localStorage.getItem(storageKey);
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email || "";
  form.elements.message.value = formData.message || "";
}

form.addEventListener("input", (event) => {
  if (event.target.name in formData) {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(storageKey, JSON.stringify(formData));
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log("Form submitted:", formData);

  form.reset();
  localStorage.removeItem(storageKey);
  formData = { email: "", message: "" };
});