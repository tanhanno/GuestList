var guestList = ["Tanja", "Pinja", "Sirkku", "Sonja", "Jake", "Sanna", "Oliver", "Kaspian", "Leo", "Indy", "Dako", "Kaija", "Kaisu"];

function checkList() {
    var name = document.getElementById("name").value;
    var firstChar = name.slice(0,1).toUpperCase();
    var restOfName = name.slice(1, name.length).toLowerCase();
    name = firstChar + restOfName;
    var result = document.getElementById("result");
    var partyInfo = document.getElementById("partyInfo");
    if (guestList.includes(name)) {
        result.textContent = "Welcome " + name + "!"
        partyInfo.classList.add("active");
    } else {
        result.textContent = "Sorry " + name + ", you are not on the list."
        partyInfo.classList.remove("active");
    }
}

document.getElementById("checkForm").addEventListener("submit", function(event) {
    event.preventDefault();
    checkList();
})

