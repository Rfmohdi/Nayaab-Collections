// Simple cart & contact logic
let cart = [];

function addToCart(name, price) {
  cart.push({name, price, qty:1});
  updateCartUI();
  showToast(name + ' added to cart');
}

function updateCartUI() {
  document.getElementById('cart-count').innerText = cart.length;
}

function showToast(msg){
  alert(msg);
}

function sendMessage(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if(!name || !email || !message){ alert('Please fill required fields'); return; }
  alert('Thank you, ' + name + '! Your message has been sent. We will reply on WhatsApp or email.');
  document.getElementById('contact-form').reset();
}

// Fade-in tagline on load
window.addEventListener("load", () => {
  const tagline = document.querySelector(".site-tagline");
  if (tagline) {
    setTimeout(() => {
      tagline.classList.add("visible");
    }, 300);
  }
});

// Fade-in animations for all elements with .fade-in and .product-card
window.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll(".fade-in, .product-card");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 200);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  fadeEls.forEach(el => observer.observe(el));
});
