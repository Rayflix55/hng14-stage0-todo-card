const deadline = new Date("2026-04-16T18:00:00Z");
const countdownEl = document.getElementById("countdown");
const check = document.getElementById("check");
const card = document.getElementById("main-card");
const statusChip = document.getElementById("status-chip");

function updateClock() {
  const now = new Date();
  const diff = deadline - now;

  if (diff <= 0) {
    countdownEl.textContent = "Due now!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

  if (days > 0) {
    countdownEl.textContent = `Due in ${days} day${days > 1 ? "s" : ""}`;
  } else {
    countdownEl.textContent = `Due in ${hours} hour${hours > 1 ? "s" : ""}`;
  }
}

check.addEventListener("change", () => {
  if (check.checked) {
    card.classList.add("done-state");
    statusChip.textContent = "DONE";
    statusChip.style.color = "#166534";
  } else {
    card.classList.remove("done-state");
    statusChip.textContent = "IN PROGRESS";
    statusChip.style.color = "var(--primary)";
  }
});

updateClock();
setInterval(updateClock, 60000);
