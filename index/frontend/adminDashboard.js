
        const token = localStorage.getItem("token");

        if (!token) {
            window.location.href = "adminLogin.html";
        }

        function logout() {
            localStorage.removeItem("token");
            window.location.href = "Home.html";
        }


        async function loadAdmins() {
            const res = await fetch("https://aushi-web-project.onrender.com/api/admin");
            const admins = await res.json();

            const adminList = document.getElementById("adminList");
            adminList.innerHTML = "";

            admins.forEach(admin => {
                const div = document.createElement("div");
                div.className = "bg-white p-4 mb-3 rounded shadow flex justify-between items-center";

                div.innerHTML = `
            <div>
                <p><strong>Email:</strong> ${admin.email}</p>
                <p><strong>Approved:</strong> ${admin.approved ? "Yes" : "No"}</p>
            </div>
            <div>
                ${!admin.approved ? `
                    <button onclick="approveAdmin('${admin._id}')" class="bg-green-600 text-white px-3 py-1 rounded mr-2">✔</button>
                    <button onclick="rejectAdmin('${admin._id}')" class="bg-red-600 text-white px-3 py-1 rounded">✖</button>
                ` : ""}
            </div>
        `;

                adminList.appendChild(div);
            });
        }


        async function approveAdmin(id) {
            await fetch(`https://aushi-web-project.onrender.com/api/admin/approve/${id}`, {
                method: "PUT"
            });

            loadAdmins(); // refresh list
        }


        async function rejectAdmin(id) {
            await fetch(`https://aushi-web-project.onrender.com/api/admin/reject/${id}`, {
                method: "DELETE"
            });

            loadAdmins();
        }





async function loadCustomers() {
    const res = await fetch("http://localhost:5000/api/customer");
    const customers = await res.json();

    const list = document.getElementById("customerList");
    list.innerHTML = "";

    customers.forEach(c => {
        const div = document.createElement("div");
        div.className = "bg-white p-4 mb-4 rounded shadow";

        div.innerHTML = `
            <p><strong>Name:</strong> ${c.name}</p>
            <p><strong>Email:</strong> ${c.email}</p>
            <p><strong>Subject:</strong> ${c.subject}</p>
            <p><strong>Message:</strong> ${c.message}</p>
            <p><strong>Contact:</strong> ${c.contactNo}</p>
            <hr class="my-3">
        `;

        list.appendChild(div);
    });
}




document.getElementById("productForm").addEventListener("submit", addProduct);

async function addProduct(e) {
    e.preventDefault();

    const name = document.getElementById("pname").value;
    const price = document.getElementById("pprice").value;
    const description = document.getElementById("pdesc").value;
    const imageFile = document.getElementById("pimage").files[0];
    const imageUrl = document.getElementById("pimageUrl").value;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);

    if (imageFile) {
        formData.append("image", imageFile);
    } else if (imageUrl) {
        formData.append("imageUrl", imageUrl);
    }

    const res = await fetch("https://aushi-web-project.onrender.com/api/products", {
        method: "POST",
        body: formData
    });

    const data = await res.json();
    alert(data.message);

    loadProducts();
}


async function loadProducts() {
    const res = await fetch("https://aushi-web-project.onrender.com/api/products");
    const products = await res.json();

    const list = document.getElementById("productList");
    list.innerHTML = "";

    products.forEach(p => {
        const div = document.createElement("div");
        div.className = "bg-white p-4 mb-4 rounded shadow flex justify-between";

        div.innerHTML = `
            <div>
                <p><strong>${p.name}</strong></p>
                <p>₹${p.price}</p>
                <p>${p.description}</p>
            </div>
            <button onclick="deleteProduct('${p._id}')" class="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
        `;

        list.appendChild(div);
    });
}


async function deleteProduct(id) {
    await fetch(`https://aushi-web-project.onrender.com/api/products/${id}`, {
        method: "DELETE"
    });

    loadProducts();
}




        function showSection(sectionId) {
            document.querySelectorAll('#dashboard, #products, #customers, #approve')
                .forEach(sec => sec.classList.add('hidden'));

            document.getElementById(sectionId).classList.remove('hidden');

            if (sectionId === "approve") {
                loadAdmins();
            }

            if (sectionId === "customers") {
                loadCustomers();
            }
            if (sectionId === "products") {
                loadProducts();
            }
        }