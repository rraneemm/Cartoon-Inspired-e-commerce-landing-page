const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("nav-Links");
const menuBtnIcon = menuBtn.querySelector("i");

const products = [
  { name: "Catwoman's Sofa", price: 5, img: "./assets/cartoonsofa.jpeg" },
  { name: "Superman's Painting", price: 6, img: "assets/painting.jpeg" },
  { name: "Bugs Bunny's Lamp", price: 7, img: "assets/cartoonlamp.jpeg" },
  { name: "Sofa", price: 8 },
  // add more products
];

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

//header container
ScrollReveal().reveal(".header_container h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header_container p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header_container form", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header_container a", {
  ...scrollRevealOption,
  delay: 1200,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

function loadProducts(productList) {
  const productListDiv = document.getElementById("productList");
  productListDiv.innerHTML = "";

  productList.forEach((product) => {
    // Corrected: Changed productListDiv to productList
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `<h3>${product.name}</h3>
    <p>$${product.price}.00</p>`;
    // const imgElement = document.createElement("img");
    // imgElement.src = product.img;
    // productDiv.appendChild(imgElement);
    productListDiv.appendChild(productDiv);
  });
}

function filterProducts(query) {
  return products.filter(
    (product) => product.name.toLowerCase().includes(query.toLowerCase()) // Corrected: Added parentheses after toLowerCase
  );
}

document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const searchInput = document.getElementById("searchInput");
    const searchQuery = searchInput.value.trim(); // Corrected: Changed ariaValueMax to value
    const filteredProducts = filterProducts(searchQuery);
    loadProducts(filteredProducts);
  });
