
// Scroll to top button
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "⬆";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 14px";
scrollBtn.style.backgroundColor = "#007bff";
scrollBtn.style.color = "white";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.fontSize = "20px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

// Dark Mode Toggle
const darkModeBtn = document.createElement("button");
darkModeBtn.innerText = "🌙";
darkModeBtn.style.position = "fixed";
darkModeBtn.style.bottom = "30px";
darkModeBtn.style.left = "20px";
darkModeBtn.style.padding = "10px 14px";
darkModeBtn.style.backgroundColor = "#222";
darkModeBtn.style.color = "white";
darkModeBtn.style.border = "none";
darkModeBtn.style.borderRadius = "50%";
darkModeBtn.style.fontSize = "20px";
darkModeBtn.style.cursor = "pointer";
document.body.appendChild(darkModeBtn);

let darkMode = false;
darkModeBtn.addEventListener("click", () => {
  darkMode = !darkMode;
  document.body.style.backgroundColor = darkMode ? "#121212" : "#f8f9fa";
  document.body.style.color = darkMode ? "#e0e0e0" : "#333";
  darkModeBtn.innerText = darkMode ? "☀️" : "🌙";
});



function handleTestimonialSubmit(event) {
  event.preventDefault();

  // You can send data to backend here if needed (API, Firebase, EmailJS, etc.)

  // For demo purpose: show thank you message
  const msgBox = document.getElementById("testimonial-msg");
  msgBox.style.display = "block";

  // Optional: Reset form after submission
  event.target.reset();

  // Auto-hide message after 5 seconds
  setTimeout(() => {
    msgBox.style.display = "none";
  }, 5000);
}



function openPreviewModal(imgPath) {
  document.getElementById('previewImage').src = imgPath;
  new bootstrap.Modal(document.getElementById('previewModal')).show();
}

function openBuyNowModal(productName) {
  document.getElementById('buyNowTitle').innerText = `Buy "${productName}"`;
  new bootstrap.Modal(document.getElementById('buyNowModal')).show();
}



function performSearch() {
  const input = document.getElementById("searchInput").value.toLowerCase().trim();
  const resultBox = document.getElementById("searchResult");

  if (input === "") {
    resultBox.classList.add("d-none");
    return;
  }

  // Example: scan headings (product titles, etc.)
  const allItems = document.querySelectorAll("h5, h4, .card-title, .product-title");
  let found = false;

  allItems.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(input)) {
      found = true;
      item.style.background = "#fff7e6";
      item.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      item.style.background = "transparent";
    }
  });

  resultBox.textContent = found ? `✅ Showing results for "${input}"` : `❌ No matches found for "${input}"`;
  resultBox.classList.remove("d-none");
}



function handleContributorSubmit(e) {
  e.preventDefault();

  // Show success message
  const msg = document.getElementById("contributorMsg");
  msg.classList.remove("d-none");

  // Clear form after 3s
  setTimeout(() => {
    e.target.reset();
    msg.classList.add("d-none");
  }, 5000);
}
