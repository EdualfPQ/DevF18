var storageUsers = JSON.parse(localStorage.getItem('users'));

inputNip.addEventListener('change', function(event){
    const inputUser = document.getElementById('inputUser').value;
    const inputNip = document.getElementById('inputNip').value;
    let user = storageUsers.find(users => users.user == inputUser);
    if(user != undefined && user.nip == inputNip){
        sessionStorage.id = user.id;
        window.location.replace("http://127.0.0.1:5500/OperacionCajero/");
    }else{
        document.getElementById('errorAlert').style.display = "block";
        document.getElementById('inputUser').value = '';
        document.getElementById('inputNip').value = '';
    }

});