document.getElementById("logout").onclick = function logout(event){
    event.preventDefault();
    var check = confirm("ログアウトしますか?");
    if(check){
        document.getElementById('logout-form').submit();
    }
};