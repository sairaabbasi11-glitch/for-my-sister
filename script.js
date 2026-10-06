// =============================================
//  YAHAN APNI DETAILS BADLEIN (change these)
// =============================================
const SISTER_NAME = "Ayesha";     // apni sister ka naam
const USERNAME    = "sister";     // login username
const PASSWORD    = "love123";    // login password
// =============================================

const QUOTES = [
  "You were my first friend, and you are still my favourite one.",
  "Some people search the whole world for a best friend. I only had to look across our room.",
  "We grew up together, so a small part of me will always be little next to you.",
  "No matter how far life takes us, our hearts still share one room.",
  "You knew every secret I had, and you kept every single one.",
  "Our fights never lasted longer than the next cup of chai.",
  "Home is not a place. It is wherever you are laughing beside me.",
  "You held my hand when I was small. Now you hold my heart.",
  "Nobody else remembers the same silly things I do. That is what makes you my sister.",
  "Whatever happens next, I already have the best part: you."
];

function isLoggedIn() {
  try { return sessionStorage.getItem("loggedIn") === "yes"; }
  catch (e) { return false; }
}

document.addEventListener("DOMContentLoaded", function () {
  const page = document.body.dataset.page;

  // Sister ka naam har jagah lagao
  document.querySelectorAll(".sister-name").forEach(function (el) {
    el.textContent = SISTER_NAME;
  });

  // Login page par pehle se logged in ho to home par bhej do
  if (page === "login" && isLoggedIn()) {
    window.location.replace("home.html");
    return;
  }

  // Menu mein current page highlight karo
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    if (a.dataset.page === page) a.classList.add("active");
  });

  // Logout button
  const logoutBtn = document.getElementById("logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      try { sessionStorage.removeItem("loggedIn"); } catch (e) {}
      window.location.href = "index.html";
    });
  }

  // Login form
  const form = document.getElementById("login-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const u = document.getElementById("username").value.trim();
      const p = document.getElementById("password").value;
      if (u === USERNAME && p === PASSWORD) {
        try { sessionStorage.setItem("loggedIn", "yes"); } catch (err) {}
        window.location.href = "home.html";
      } else {
        document.getElementById("error").textContent =
          "That username or password doesn't match. Check both and try again.";
      }
    });
  }

  // Home page: random quote
  const quoteText = document.getElementById("quote-text");
  const quoteBtn = document.getElementById("new-quote");
  if (quoteText && quoteBtn) {
    const showQuote = function () {
      quoteText.textContent = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    };
    showQuote();
    quoteBtn.addEventListener("click", showQuote);
  }

  // Quotes page: saari quotes sticky notes par
  const list = document.getElementById("quote-list");
  if (list) {
    QUOTES.forEach(function (q) {
      const li = document.createElement("li");
      li.className = "sticky";
      li.textContent = q;
      list.appendChild(li);
    });
  }
});
