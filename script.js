let todoData = {
  title: "Launch Social Media Campaign",
  description:
    'Prepare visuals and copy for the "30 Days of Productivity" campaign across Instagram, LinkedIn, and X.',
  priority: "High",
  status: "In Progress", // Pending, In Progress, Done
  dueDate: "2026-04-16T18:00",
};

const mainCard = document.getElementById("main-card");
const viewMode = document.getElementById("view-mode");
const editMode = document.getElementById("edit-mode");
const priorityBorder = document.getElementById("priority-border");

function render() {
  document.getElementById("display-title").textContent = todoData.title;
  document.getElementById("display-description").textContent =
    todoData.description;
  document.getElementById("status-chip").textContent =
    todoData.status.toUpperCase();
  document.getElementById("display-due-date").textContent =
    `Due: ${new Date(todoData.dueDate).toLocaleString()}`;

  //  Sync Priority Pill Color
  const priorityPill = document.getElementById("priority-pill");
  priorityPill.textContent = `${todoData.priority} Priority`;

  priorityPill.classList.remove("bg-high", "bg-medium", "bg-low");

  const priorityKey = todoData.priority.toLowerCase(); // 'high', 'medium', or 'low'
  priorityPill.classList.add(`bg-${priorityKey}`);

  const check = document.getElementById("check");
  const dropdown = document.getElementById("status-dropdown");
  check.checked = todoData.status === "Done";
  dropdown.value = todoData.status;

  if (todoData.status === "Done") {
    mainCard.classList.add("done-state");
  } else {
    mainCard.classList.remove("done-state");
  }

  updateTimeLogic();
}

function updateTimeLogic() {
  if (!todoData) return;

  const now = new Date();
  const due = new Date(todoData.dueDate);
  const diff = due - now;
  const countdownEl = document.getElementById("countdown");
  const urgencyDot = document.getElementById("urgency-dot");

  if (todoData.status === "Done") {
    countdownEl.textContent = "Completed";
    countdownEl.classList.remove("urgent-text");
    urgencyDot.classList.add("hidden");
    mainCard.classList.remove("is-urgent");
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);

  if (diff < 0) {
    countdownEl.textContent = "Overdue";
  } else if (days > 0) {
    countdownEl.textContent = `Due in ${days}d ${hours}h`;
  } else if (hours > 0) {
    countdownEl.textContent = `Due in ${hours}h ${minutes}m`;
  } else {
    countdownEl.textContent = `Due in ${minutes}m`;
  }

  //  Smart Urgency UI (Trigger if < 24 hours or Overdue)
  if (diff < 86400000) {
    // Less than 1 day
    urgencyDot.classList.remove("hidden");
    countdownEl.classList.add("urgent-text");
    mainCard.classList.add("is-urgent");
  } else {
    urgencyDot.classList.add("hidden");
    countdownEl.classList.remove("urgent-text");
    mainCard.classList.remove("is-urgent");
  }
}

document.getElementById("edit-btn").addEventListener("click", () => {
  document.getElementById("edit-title").value = todoData.title;
  document.getElementById("edit-desc").value = todoData.description;
  document.getElementById("edit-priority").value = todoData.priority;
  document.getElementById("edit-date").value = todoData.dueDate;

  viewMode.classList.add("hidden");
  editMode.classList.remove("hidden");
});

document.getElementById("save-btn").addEventListener("click", () => {
  todoData.title = document.getElementById("edit-title").value;
  todoData.description = document.getElementById("edit-desc").value;
  todoData.priority = document.getElementById("edit-priority").value;
  todoData.dueDate = document.getElementById("edit-date").value;

  editMode.classList.add("hidden");
  viewMode.classList.remove("hidden");
  render();
});

document.getElementById("cancel-btn").addEventListener("click", () => {
  editMode.classList.add("hidden");
  viewMode.classList.remove("hidden");
});

document.getElementById("status-dropdown").addEventListener("change", (e) => {
  todoData.status = e.target.value;
  render();
});

document.getElementById("check").addEventListener("change", (e) => {
  todoData.status = e.target.checked ? "Done" : "Pending";
  render();
});

document.getElementById("expand-btn").addEventListener("click", (e) => {
  const section = document.getElementById("collapsible-section");
  const isCollapsed = section.classList.toggle("collapsed");
  e.target.textContent = isCollapsed ? "Read More" : "Show Less";
  e.target.setAttribute("aria-expanded", !isCollapsed);
});

render();
setInterval(updateTimeLogic, 30000);
