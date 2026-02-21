# 🌿 Aushi – Modern Full Stack Product Website  

Aushi_Web_project is a full-stack eCommerce-style product website with an Admin Approval System made specially for Aushi Immunosciences pvt. ltd., Product Management Dashboard, and Customer Contact Handling.

This project demonstrates practical implementation of:

- 🔐 Admin authentication & approval workflow  
- 📦 Dynamic product management  
- 🖼️ Image upload using Multer  
- 📬 Contact form data handling  
- 🗄️ MongoDB Atlas integration  
- 🎨 Tailwind CSS responsive UI  

---

## 🚀 Tech Stack

### Frontend
- HTML5  
- Tailwind CSS  
- Vanilla JavaScript  

### Backend
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- Multer (for image upload)  
- JWT (Authentication)  

---

## ✨ Features

### 🏠 User Side
- View dynamic products
- Smooth scroll navigation
- Responsive mobile layout
- Contact Us form (data stored in MongoDB)

---

### 🔐 Admin System
- Admin registration (requires approval)
- Admin login with JWT
- Protected dashboard access
- Logout functionality

---

### 📦 Product Management
- Add product (name, price, description, image)
- Upload image from local system
- Store image in `/uploads`
- Fetch products dynamically
- Delete product
- Update product

---

### 📬 Customer Management
- Contact form data saved in MongoDB
- Admin dashboard shows:
  - Name
  - Email
  - Subject
  - Message
  - Contact Number

---

### ✅ Admin Approval Workflow
- Admin registers
- Status = `approved: false`
- Super admin can:
  - ✔ Approve admin
  - ✖ Reject admin
- Only approved admins can log in

---

## 📂 Project Structure

```
Aushi/
│
├── backend/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│
├── frontend/
│   ├── Home.html
│   ├── adminDashboard.html
│   ├── adminLogin.html
│   ├── scripts/
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/Aushi_Web_Project.git
cd Aushi_Web_Project
```

### 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

### 3️⃣ Create `.env` file

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Start Server

```bash
node server.js
```

Server runs on:

```
http://localhost:5000
```

---

## 🧠 Learning Outcomes

- REST API design
- Role-based authentication
- File upload handling with Multer
- Full-stack debugging
- MongoDB schema design
- Frontend–Backend integration
- Real-world admin workflows

---

## 🔮 Future Improvements

- Payment gateway integration  
- Cloud image storage (Cloudinary / AWS S3)  
- Role-based access control  
- Product categories & filtering  
- Analytics dashboard  

---

## 📌 Why This Project Matters

Aushi_Web_Project is not just a static website.  
It is a full-stack system with real admin workflow logic, secure authentication, and database-driven rendering — similar to real-world business websites.

---

## 👩‍💻 Developed By

Advaita Singh  
B.Tech CSE | Full Stack Developer in Progress  
Building systems, not just pages.
