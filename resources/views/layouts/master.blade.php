<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link src="/css/style.css" rel="stylesheet" />
    <title>Vue Router</title>
</head>
<body>
    <div id="app">
        <router-link to="/" exact>Home</router-link>
        <router-link to="/about">About</router-link>
        <router-view></router-view>
    </div>
    <script src="/js/app.js"></script>
</body>
</html>