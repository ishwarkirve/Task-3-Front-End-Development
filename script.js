let btn = document.querySelector("#resume");

btn.addEventListener("click", () => {
    let a = document.createElement("a");
    a.href = "Resume.pdf";
    a.download = "resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
})