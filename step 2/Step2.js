document.getElementById('name').addEventListener('focusout', function(){
    const name = document.getElementById('name').value;
    alert ("Thank you for participating" + " " + name + "!");
})