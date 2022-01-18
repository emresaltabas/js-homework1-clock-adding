let username=prompt("Kullanıcı adı giriniz:");
let info=document.querySelector("#myName");
info.innerHTML=`${username.toUpperCase()}`;

function myClock() {         
    setTimeout(function() {   
      const d = new Date();
      const n = d.toLocaleTimeString();
      document.getElementById("myClock").innerHTML = n; 
      myClock();             
    }, 1000)
  }
  myClock(); 

  const d = new Date();
  document.getElementById("myDate").innerHTML = d.toDateString();