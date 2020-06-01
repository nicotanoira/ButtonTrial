function show() {
    let isToggle = document.getElementById("puf");
    if(isToggle.style.display === "none") {
        isToggle.style.display = "block";
        document.getElementById("main-button").innerHTML = "Click Here to hide";
    } else {
        isToggle.style.display = "none";
        document.getElementById("main-button").innerHTML = "Click Here to see";
    }
}
