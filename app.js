const inputYear = document.querySelector("#birthDate");
const calculateBtn = document.querySelector("#calculate");
const ageElement = document.querySelector("#age");

calculateBtn.addEventListener("click", () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const birthYear = parseInt(inputYear.value);
  const age = currentYear - birthYear;

  if (age >= 0) {
    ageElement.innerHTML = "You are " + age + " years old.";
    localStorage.setItem("age", age);
  } else {
    alert('Invalid Birth year')
    localStorage.removeItem("age");
  }
});

window.addEventListener("load", () => {
  const savedAge = localStorage.getItem("age");
  if (savedAge) {
    ageElement.innerHTML = "You are " + savedAge + " years old.";
  }
});
