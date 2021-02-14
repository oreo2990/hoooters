<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>HOOOTERS WelcomePage Template</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta content="" name="keywords">
  <meta content="" name="description">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700" rel="stylesheet">

  <!-- Bootstrap CSS File -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

  <!-- Libraries CSS Files -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">

  <!-- Favicons -->
  <link href="{{asset('/pic/favicon.png')}}" rel="icon">

   <!-- リセットcss -->
   <link href="{{asset('/css/reset.css')}}" rel="stylesheet">
   
  <!-- welcome用css -->
  <link href="{{asset('/css/welcome.css')}}" rel="stylesheet">


</head>

<body>



  <div id="headerwrap">
    <div class="container">
          <img class="img-responsive" src="{{asset('/pic/logo.png')}}" alt="">
    </div>
    <div class="container">   
        <div class="row">
            <div class="col-md-5">
              <img class="img-fluid" src="{{asset('/pic/ipad-hand.png')}}" alt="">
            </div>
            <div class="col-md-7">
              <button type="button" class="btn btn-warning btn-lg"><a href="{{asset('/login')}}">   LOG IN ! </a></button>
              <button type="button" class="btn btn-warning btn-lg"><a href="{{asset('/register')}}">   REGISTER !  </a></button>

              <img src="{{asset('/pic/search.jpg')}}" class="img-flex align-items-end">
            </div>
        </div>
        <!-- <div class="row">

        </div> -->
    </div>
  </div>
 


</body>
</html>
