let storageUsers = JSON.parse(localStorage.getItem('users'));
let sessionUser = sessionStorage.id;
let index = storageUsers.findIndex(indx => indx.id == sessionUser);
let user = storageUsers.find(users => users.id == sessionUser);

let userName = document.getElementById('userName');
userName.append(user.name)

let logOut = document.getElementById('cerrarSesion');
logOut.addEventListener('click', function(event){
    localStorage.clear();
    window.location.replace("http://127.0.0.1:5500/LoginCajero/");
});

let con = document.getElementById('buttonCon');
con.addEventListener('click', function(){
    const saldo = document.getElementById('balance');
    console.log(saldo.innerText.length);
    if(saldo.innerText.length == 0){  
        saldo.innerText = "Usted posee: $" + user.balance;
    }else{
        saldo.innerText = "";
    }
    
});

let ing = document.getElementById('buttonIng');
ing.addEventListener('click', function(){
    const hide = document.getElementById('buttonsContainer').style.display = "none"
    const div = document.getElementById('body');
    const createDiv = document.createElement('div')
    createDiv.setAttribute('id','removeElement')
    createDiv.innerHTML = `
    <h4 id="balanceIng">Su balance actual es $ ${user.balance}</h4>
    <div class="operation-element">
        <h4>Cantidad a ingresar<h4>
        <input type="number" class="form-control" id="inputIng" placeholder="Ejemplo:10">
    </div>
    <div class="space-beetwen">
        <button class="btn btn-outline-primary atm-button" onclick="addition()">Ingresar</button>
        <button class="btn btn-outline-primary atm-button" onclick="back()">Regresar</button>
    </div>
    `
    div.appendChild(createDiv);
});

let ret = document.getElementById('buttonRet');
ret.addEventListener('click', function(){
    const hide = document.getElementById('buttonsContainer').style.display = "none"
    const div = document.getElementById('body');
    const createDiv = document.createElement('div')
    createDiv.setAttribute('id','removeElement')
    createDiv.innerHTML = `
    <h4 id="balanceRet">Su balance actual es $ ${user.balance}</h4>
    <div class="operation-element">
        <h4>Cantidad a retirar<h4>
        <input type="number" class="form-control" id="inputRes" placeholder="Ejemplo:10">
    </div>
    <div class="space-beetwen">
        <button class="btn btn-outline-primary atm-button" onclick="subtraction()">Retirar</button>
        <button class="btn btn-outline-primary atm-button" onclick="back()">Regresar</button>
    </div>
    `
    div.appendChild(createDiv);
});

function back(){
    const div = document.getElementById('removeElement').remove();
    const hide = document.getElementById('buttonsContainer').style.display = "block"
    document.getElementById('balance').innerText = "Usted posee: $" + user.balance;
}

function addition(){
    let value = parseInt(document.getElementById('inputIng').value);
    if(value >=  0){
        if((user.balance + value) <= 990){
            let newBalance = value + user.balance;
            storageUsers[index].balance = newBalance;
            localStorage.setItem('users', JSON.stringify(storageUsers));
            document.getElementById('balanceIng').innerText = `Su balance actual es $${user.balance}`
        }else{
            alert("El resultado supera el balance maximo permitido ($990).");
        }
    }else{
        alert("Favor de ingresar un deposito valido.");
    }
    document.getElementById('inputIng').value = "";
}

function subtraction(){
    console.log(balance);
    let value = parseInt(document.getElementById('inputRes').value);
    if(value >=  0){
        if((user.balance - value) >= 10){
            let newBalance = user.balance - value;
            storageUsers[index].balance = newBalance;
            localStorage.setItem('users', JSON.stringify(storageUsers));
            document.getElementById('balanceRet').innerText = `Su balance actual es $${user.balance}`
        }else{
            alert("El resultado es inferior al balance minimo permitido ($10).");
        }
    }else{
        alert("Favor de ingresar un retiro valido.");
    }
}

function alert(msg){
    let alert = document.getElementById('errorAlert');
        alert.innerText = msg
        alert.style.display = "block";
        setTimeout(function(){
            alert.style.display = "none";
        }, 4000)
}