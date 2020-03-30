
function manage(txtName) {
    let elButton = document.getElementById('send');
    if(txtName.value.length >=2){
        elButton.disabled = false;
    }
else{
    elButton.disabled = true;
    }
    document.getElementById('txtMessage').style.height="50px";
    let elName = document.getElementById('txtName').value;
    let elLastName = document.getElementById('txtlastName').value;
    let elEmail = document.getElementById('txtEmail').value;
    let elMessage = document.getElementById('txtMessage').value;

    localStorage.setItem("name", elName);
    localStorage.setItem("lastname", elLastName);
    localStorage.setItem("email", elEmail);
    localStorage.setItem("message", elMessage);
}




//document.getElementById("output").innerHTML = localStorage.getItem("name");



