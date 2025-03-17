window.onload = function() {
   
    let userData = JSON.parse(localStorage.getItem('user1')); 

    if (userData) {
       
        document.getElementById("profileUsername").textContent = userData.username;
        document.getElementById("profileEmail").textContent = userData.email;
        document.getElementById("profileCity").textContent = userData.city;
        document.getElementById("profilenumber").textContent = userData.number;
    } else {
      
        alert("لم يتم العثور على بيانات المستخدم. يرجى التسجيل أولاً.");
        window.location.href = "register.html"; 
    }
};
