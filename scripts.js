/*
function toggleDiv(selectDiv) {
  const div = document.getElementById(selectDiv);
  div.classList.toggle("hidden");
}
*/
function toggleDiv(selectDiv) {
  const div = document.getElementById(selectDiv);
  const button = document.querySelector(`button[data-target="${selectDiv}"]`);

  div.classList.toggle("hidden");

  if (button) {
    const isHidden = div.classList.contains("hidden");
    button.textContent = (isHidden ? "+" : "-");
  }
}