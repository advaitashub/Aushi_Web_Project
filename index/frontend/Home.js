
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

const buttons = document.querySelectorAll(".scroll_button");
 
 buttons.forEach(button => {
  button.addEventListener("click", function() {
    const targetId = this.getAttribute("data-target");
    const section = document.getElementById(targetId);

    section.scrollIntoView({
      behavior: "smooth"
    });
  });
});

document.getElementById("adminBtn").addEventListener("click", function () {
  window.location.href = "adminLogin.html";
});





document.addEventListener("DOMContentLoaded", function () {

  const cards = document.querySelectorAll(".blog-card");

  cards.forEach(card => {

    const content = card.querySelector(".blog-content");

    if (!content) return;

    card.addEventListener("click", function () {

      // Only mobile behavior
      if (window.innerWidth >= 1024) return;

      const isOpen = !content.classList.contains("hidden");

      // Close all
      cards.forEach(c => {
        const cContent = c.querySelector(".blog-content");
        if (cContent) cContent.classList.add("hidden");
      });

      // Open clicked one
      if (!isOpen) {
        content.classList.remove("hidden");

        card.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    });

  });

});



//PRODUCTS 
async function loadProducts() {
    const container = document.getElementById("products");

    try {
        const res = await fetch("https://aushi-web-project.onrender.com/api/products");
        const products = await res.json();

        container.innerHTML = "";

        products.forEach(p => {
            const card = document.createElement("div");
            card.className = "flex-shrink-0 w-60 snap-center rounded-xl overflow-hidden shadow-2xl bg-gray-800 p-4";

            card.innerHTML = `
                <img src="https://aushi-web-project.onrender.com/${p.image}" class="w-full h-60 object-cover rounded-lg">
                <div class="mt-2">
                    <h2 class="text-lg font-bold truncate text-white">${p.name}</h2>
                    <p class="text-sm text-gray-300">
                        ${p.description}
                    </p>
                    <p class="text-sm font-bold mt-1 text-white">₹${p.price}</p>
                </div>
            `;

            container.appendChild(card);
        });
        if (!res.ok) {
   throw new Error("Failed to fetch products");
}

    } catch (err) {
        console.error("Error loading products", err);
    }
}

loadProducts();
