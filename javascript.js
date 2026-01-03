function registerUser() {
    alert("Registration Successful!");
}
function registerUser() {
    // input values eduthukuradhu
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // display pannradhu
    document.getElementById("output").innerHTML =
        "<h3>Registered Details</h3>" +
        "<p>Name: " + name + "</p>" +
        "<p>Email: " + email + "</p>" +
        "<p>Password: " + password + "</p>";
}

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });

    document.getElementById("cartCount").innerText = cart.length;

    alert(productName + " added to cart!");
}


