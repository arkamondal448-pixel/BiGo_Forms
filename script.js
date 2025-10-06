document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("receptionForm");
  const purposeSelect = document.getElementById("purpose");
  const otherPurposeGroup = document.getElementById("otherPurposeGroup");

  const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzGvzNnfwcHg_K1lccWt_hqPBLhFs4WU7Ir6cZok3yc68Gz5IQfrC0nGKvIfbqUFMCfUg/exec"; // 🔹 replace

  purposeSelect.addEventListener("change", () => {
    if (purposeSelect.value === "other") otherPurposeGroup.classList.remove("hidden");
    else otherPurposeGroup.classList.add("hidden");
  });

  form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    formType: "reception",
    visitorName: document.getElementById("visitorName").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    purpose: document.getElementById("purpose").value,
    otherPurpose: document.getElementById("otherPurpose").value,
    department: document.getElementById("department").value,
    reference: document.getElementById("reference").value
  };

  // Save Reception first
  await fetch(WEB_APP_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(formData)
  });

  // Redirect based on purpose
const purpose = formData.purpose.trim().toLowerCase();

if ( purpose === "training" ) {
    window.location.href = "training.html";
} else if (purpose === "bikedelivery") {
   window.location.href = "vehicle.html";
}else if (purpose === "accessories") {
   window.location.href = "accessories.html";
}else if (purpose === "interview") {
   window.location.href = "inerview.html";
}
 else {
    alert("✅ Reception data saved!");
    form.reset();
    otherPurposeGroup.classList.add("hidden");
}


// Fallback for other purposes
alert("✅ Reception data saved!");
form.reset();
otherPurposeGroup.classList.add("hidden");
});
});


