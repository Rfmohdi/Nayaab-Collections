// Nayaab Collections - simple cart + contact helpers
let cart = [];

function addToCart(name, price){
  const existing = cart.find(i => i.name === name);
  if(existing){ existing.qty += 1; } else { cart.push({name, price, qty:1}); }
  updateCartCount();
  alert(name + ' added to cart');
}

function updateCartCount(){
  // We could add a cart counter in header if desired. For now this is placeholder.
  // document.getElementById('cart-count').innerText = cart.length;
}

function viewDetail(name){
  alert('Product: ' + name + '\nFor more details contact us on WhatsApp.');
}

function sendMessage(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if(!name || !email || !message){ alert('Please fill all fields'); return; }
  alert('Thanks '+name+' — message received. We will contact you on WhatsApp.');
  document.getElementById('contact-form').reset();
}

// Open URL helper
function openInNewTab(url){
  window.open(url, '_blank');
}

// Attempt to load Instagram embed script if page includes blockquote embeds (optional)
(function loadInstagramScript(){
  var s = document.createElement('script');
  s.src = "https://www.instagram.com/embed.js";
  s.async = true;
  document.body.appendChild(s);
})();
