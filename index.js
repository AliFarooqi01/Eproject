
function openNav2() {
    document.getElementById("mySidenav3").style.width = "100%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav2() {
    document.getElementById("mySidenav3").style.width = "0";
    document.body.style.backgroundColor = "white";
}
let number = 1;

function inc() {
    if (number < 200) {
        number++;
        document.getElementById("plus").innerHTML = number;
    }
};
function ini() {
    if (number > 0) {
        number--;
        document.getElementById("plus").innerHTML = number;
    }
};

//////////navbar fixed////////////////////////

document.addEventListener("scroll", scroller)
function scroller() {
    if (scrollY > 216) {
        document.getElementById("header3").classList.add("fixheader")
        document.getElementById("header3").classList.add("fixheader")

    } else {
        document.getElementById("header3").classList.remove("fixheader")
}
}

//////////////////////////check out //////////////////////////////////////////////
function checkvalidation() {
    var uname = document.querySelector("#uname");
    var Email = document.querySelector("#Email");
    var pass = document.querySelector("#pass");
    var cpass = document.querySelector("#cpass");

    if (uname.value.trim() == "") {
        alert("Username is required")
        uname.focus();
        return false;
    }
    else if (Email.value.trim() == "") {
        alert("Email is required")
        Email.focus();
        return false;
    }
    else if (pass.value.trim() == "") {
        alert("Password is required")
        pass.focus();
        return false;
    }
    else if (cpass.value.trim() == "") {
        alert("Confirm password is required")
        cpass.focus();
        return false;
    }
    else if (pass.value != cpass.value) {
        cpass.focus();
        alert("password Does not Match");
        return false;
    }
    else {
        var text = document.getElementById("text").innerHTML = "Thanks For Registration";
        document.write(text);

    }

}
function remove() {
    var a = document.getElementById("pera");
    a.innerHTML = "Your Cart is Empty"
    a.style.color = "black";

    a.style.fontSize = "20px"
    a.style.fontWeight = "700"
    a.style.textAlign = "center";
    a.style.fontFamily = "cursive"

}
