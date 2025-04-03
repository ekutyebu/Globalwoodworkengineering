<?php
session_start();
include '../db_connection.php';

$identifier = $_POST['identifier'];
$password = $_POST['password'];

if (empty($identifier) || empty($password)) {
    header('Location: login.php?error=All fields are required');
    exit();
}

// Check password strength
if (!preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/', $password)) {
    header('Location: login.php?error=Password is not strong enough');
    exit();
}

// Check if the user is the admin
if ($identifier === 'adminuser' && $password === 'StrongAdminPass123!') { // Updated admin username and password
    $_SESSION['user'] = 'adminuser'; // Ensure session value matches the check in admin/dashboard.php
    header('Location: /Globalwoodworkengineering/admin/dashboard.php');
    exit();
}

// Check if user exists in the database
$stmt = $conn->prepare("SELECT * FROM users WHERE email = ? OR username = ?");
$stmt->bind_param("ss", $identifier, $identifier);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();
    if (password_verify($password, $user['password'])) {
        $_SESSION['user'] = $user['username'];
        header('Location: /Globalwoodworkengineering/index.php');
        exit();
    }
}

header('Location: login.php?error=Invalid credentials');
exit();
?>
