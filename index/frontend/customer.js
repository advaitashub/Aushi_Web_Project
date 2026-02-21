document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        subject: form.subject.value.trim(),
        message: form.message.value.trim(),
        contactNo: form.contactNo.value.trim()
    };

    if (!data.name || !data.email || !data.subject || !data.message || !data.contactNo) {
        alert("All fields are required");
        return;
    }

    if (!/^\d{10}$/.test(data.contactNo)) {
        alert("Phone number must be exactly 10 digits");
        return;
    }

    try {
        const res = await fetch("http://localhost:5000/api/customer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const result = await res.json();
        alert(result.message);
        if (result.success) form.reset();

    } catch (err) {
        alert("Something went wrong. Try again.");
        console.error(err);
    }
});
