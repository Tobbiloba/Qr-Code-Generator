const wrapper = document.querySelector(".wrapper"),
generateBtn = wrapper.querySelector(".form button"),
qrInput = wrapper.querySelector(".form input"),
qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = "Generating QR Code"
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example${qrValue}`
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active")
        generateBtn.innerText = "Generate QR Code"
    })
    wrapper.classList.add("active");
});
qrInput.addEventListener("keyup", () => {
    if(!qrInput.value){
        wrapper.classList.remove("active")
    }
})