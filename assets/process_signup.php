<?php
session_start();
include '../db_connection.php';

$email = $_POST['email'];
$username = $_POST['username'];
$password = $_POST['password'];

if (empty($email) || empty($username) || empty($password)) {
    header('Location: signup.php?error=All fields are required');
    exit();
}

// Validate username length
if (strlen($username) < 6) {
    header('Location: signup.php?error=Username must be at least 6 characters long');
    exit();
}

// Validate password strength
if (!preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/', $password)) {
    header('Location: signup.php?error=Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a special character');
    exit();
}

// Check if email or username already exists
$stmt = $conn->prepare("SELECT * FROM users WHERE email = ? OR username = ?");
$stmt->bind_param("ss", $email, $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    header('Location: signup.php?error=Email or Username already exists');
    exit();
}

// Insert new user
$hashedPassword = password_hash($password, PASSWORD_BCRYPT);
$stmt = $conn->prepare("INSERT INTO users (email, username, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $email, $username, $hashedPassword);

if ($stmt->execute()) {
    $_SESSION['user'] = $username;
    header('Location: /Globalwoodworkengineering/index.php');
} else {
    header('Location: signup.php?error=Something went wrong');
}
exit();
?>
