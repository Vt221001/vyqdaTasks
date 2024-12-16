document.getElementById("submitBtn").addEventListener("click", async () => {
    const apiUrl = "https://chimpu.online/api/post.php";
    const phoneNumber = document.getElementById("phonenumber").value.trim();
    document.getElementById("phonenumber").value = "";
  
    if (!phoneNumber) {
      alert("Please enter a valid phone number");
      return;
    }
  
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }
    console.log("Phone number", phoneNumber);
  
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phonenumber: phoneNumber }),
      });
  
      const data = await response.json();
      console.log("Response", data);
  
      const modalDiv = document.getElementById("headerData-modal");
      const para = modalDiv.querySelector(".para");
  
      if (data && data.msg) {
        para.textContent = data.msg;
        modalDiv.classList.remove("hidden");
      } else {
        para.textContent = "No msg header received.";
        modalDiv.classList.remove("hidden");
      }
    } catch (err) {
      console.error("Error fetching data", err);
      alert("An error occurred while fetching data. Please try again.");
    }
  });
  
  document.getElementById("closeModalBtn").addEventListener("click", () => {
    document.getElementById("headerData-modal").classList.add("hidden");
  });
  