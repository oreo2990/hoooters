let headcount = 0;
document.querySelector('.icon-wrapper').addEventListener('click',function(){
  console.log(headcount);
  switch(headcount%2){
    case 0:
      document.querySelector('.mypage-list').classList.remove('none');
      headcount++;
      break;
      case 1:
        document.querySelector('.mypage-list').classList.add('none');
        headcount++;
        break;
  }
});

document.getElementById("logout-btn").onclick = function logout(event){
  event.preventDefault();
  const check = confirm("ログアウトしますか?");
  if(check){
    document.getElementById('logout-form').submit();
  }else{
    return;
  }
};