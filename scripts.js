const formSteps = document.querySelectorAll(".form-step");
const progress = document.getElementById("progress");
const themeToggle = document.getElementById("themeToggle");
const form = document.getElementById("multiStepForm");
const successMessage = document.getElementById("successMessage");
const landingPage = document.getElementById("landingPage");
const formContainer = document.getElementById("form-container");
const startFormBtn = document.getElementById("startFormBtn");
let currentStep = 0;

document.querySelectorAll(".next-btn").forEach(button => {
  button.addEventListener("click", () => {
    currentStep++;
    updateForm();
  });
});

document.querySelectorAll(".prev-btn").forEach(button => {
  button.addEventListener("click", () => {
    currentStep--;
    updateForm();
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  themeToggle.textContent = 
    document.body.classList.contains("light-mode") ? "Switch to Dark Mode" : "Switch to Light Mode";
});

document.querySelectorAll("input[type='range']").forEach(slider => {
  slider.addEventListener("input", (e) => {
    const value = e.target.value;
    e.target.nextElementSibling.textContent = value;
  });
});

function updateForm() {
  formSteps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep);
  });
  progress.style.width = `${(currentStep / (formSteps.length - 1)) * 100}%`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); 
  form.style.display = "none"; 
  successMessage.classList.remove("hidden"); 
});

function resetForm() {
  form.reset();
  currentStep = 0;
  updateForm();
  form.style.display = "block";
  successMessage.classList.add("hidden");
}

