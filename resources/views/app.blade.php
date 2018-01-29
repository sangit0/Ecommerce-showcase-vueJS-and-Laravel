
<!DOCTYPE html>
<html>
<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
{{--   <link rel="icon" type="image/png" sizes="16x16" href="../plugins/images/favicon.png">
 --}}

  <title>Test ecommerce</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
  <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
  <link href="{{asset('/css/app.css')}}" rel="stylesheet">
</head>
<body class="fix-header">

    <div  id="app">

    </div>
    <script>
      window.Laravel = <?php echo json_encode([
          'csrfToken' => csrf_token(),
               ]); ?>


     </script>
  </body>
  <script src="{{asset('/js/app.js')}}"></script>
  </html>
