function clearfields() {
    document.getElementById('name').value = "";
    document.getElementById('surname').value = "";
    document.getElementById('city').value = "";
}
function confirmaction() {
    if(confirm('Are you sure you need to reset the fields?')){
        clearfields();
        alert("fields are cleared");
    }
    else{
        alert("action canceled");
    }
}
