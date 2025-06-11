// AI select function
const select = document.getElementById('timeSelect')
select.addEventListener('change', function () {
  const selected = select.value;
  localStorage.setItem('length', selected)

  console.log(`${localStorage.getItem('length')}`)
});

document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("startButton");
  const timeSelect = document.getElementById("timeSelect");

  startButton.addEventListener("click", () => {
    if (!timeSelect.value) {
      alert("Please select a time before starting the test.");
    } else {
      window.location.href = "test.html";
    }
  });
});
