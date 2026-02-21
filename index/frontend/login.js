const btn =document.getElementById("btn")

btn.addEventListener("click", async(e)=>{
    e.preventDefault();

    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;

    const res= await fetch("http://localhost:5000/api/admin/login",{
        method:"POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({email,password})
    });

    const data =await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      window.location.href = "adminDashboard.html";
    } else {
      alert(data.message);
    }
  });