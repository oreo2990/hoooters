window.onload = function(){
  const gid = document.getElementById('gid').value;
  console.log(gid);
  switch(gid){
    case '1':
      document.getElementById('new').classList.add('act');
      break;
    case '2':
      document.getElementById('webservice').classList.add('act');
      break;
    case '3':
      document.getElementById('production').classList.add('act');
      break;
    case '4':
      document.getElementById('marketing').classList.add('act');
      break;
    case '5':
      document.getElementById('other').classList.add('act');
      break;
    case '6':
      document.getElementById('sier').classList.add('act');
      break;
  }
  itemmoves();
  textchange();
}