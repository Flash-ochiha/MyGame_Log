<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Starry Background Login</title>
    <style>
        body {
            background-color: black;
            color: white;
            font-family: Arial, sans-serif;
            overflow: hidden;
        }
        .stars {
            position: absolute;
            width: 100%;
            height: 100%;
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><circle cx="50" cy="50" r="50" fill="white" opacity="0.5" /></svg>') repeat;
            z-index: -1;
        }
        .login-container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
        }
        input[type="text"], input[type="password"] {
            padding: 10px;
            margin: 5px;
            border: none;
            border-radius: 5px;
        }
        button {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            background-color: white;
            color: black;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="stars"></div>
    <div class="login-container">
        <h1>Login</h1>
        <input type="text" id="username" placeholder="Username" required>
        <input type="password" id="password" placeholder="Password" required>
        <button onclick="login()">Login</button>
    </div>

    <script>
        function login() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (username && password) {
                window.location.href = 'welcome.html';
            } else {
                alert('Please enter both username and password.');
            }
        }
    </script>
</body>
</html>
