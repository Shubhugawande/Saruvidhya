function displayCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartDiv = document.getElementById("cartItems");
  const totalAmount = document.getElementById("totalAmount");
  cartDiv.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartDiv.innerHTML = '<div class="empty">Your cart is empty.</div>';
    totalAmount.innerText = "Total: ₹0";
    return;
  }

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div class="item-left">
        <strong>${item.name}</strong><br>
        ₹${item.price} × ${item.quantity || 1} = ₹${item.price * (item.quantity || 1)}
      </div>
      <div>
        <button onclick="addItem(${index})" class="add-btn">➕</button>
        <button onclick="removeItem(${index})" class="remove-btn">❌</button>
      </div>
    `;
    cartDiv.appendChild(div);
    total += item.price * (item.quantity || 1);
  });

  totalAmount.innerText = "Total: ₹" + total;
}

function addItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].quantity = (cart[index].quantity || 1) + 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    cart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function buyNow() {
  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const address = document.getElementById("Address").value;

  if (!name || !mobile || address === "select") {
    alert("Please fill in all customer details.");
    return;
  }

  alert(`✅ Order Placed!\n\nName: ${name}\nMobile: ${mobile}\nCollege: ${address}`);
  localStorage.removeItem("cart");

  document.getElementById("name").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("Address").value = "select";

  displayCart();
}

displayCart();
