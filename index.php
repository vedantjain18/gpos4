<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Login</title>
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css">
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">

        <link href="style.css" rel="stylesheet" type="text/css">
	</head>
	<body>
	

        <!-- <imgsrc="logo.png"></imgsrc> -->
		<div class="login">
			<h1>Login</h1>
			<form action="authenticate.php" method="post">
				<label for="username">
					<i class="fas fa-user"></i>
				</label>
				<input type="text" name="username" placeholder="Username" id="username" required>
				<label for="password">
					<i class="fas fa-lock"></i>
				</label>
				<br><br>
				<input type="password" name="password" placeholder="Password" id="password" required>
				<input type="radio" id="2122" name="finyear" value="2122">
				<label for="2122">2021-2022</label><br>
				<input type="radio" id="2223" name="finyear" value="2223">
				<label for="2223">2022-2023</label><br>
				<input type="radio" id="2324" name="finyear" value="2324">
				<label for="2324">2023-2024 </label><br>
				<input type="radio" id="2425" name="finyear" value="2425" checked>
				<label for="2425">2024-2025 </label><br>
				
				<input type="submit" value="Login">
			</form>
		</div>
	</body>
</html>