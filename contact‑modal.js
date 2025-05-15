// Show “thank‑you” modal instead of navigating away
document.getElementById("regForm").addEventListener("submit", function (e) {
  e.preventDefault();                     // stop normal POST / navigation
  // reset the multistep wizard
  document.querySelectorAll(".tab").forEach(t => t.style.display = "none");
  currentTab = 0; showTab(currentTab);

  // Bootstrap 5 modal show
  const modal = new bootstrap.Modal(document.getElementById("sendModal"));
  modal.show();
});
