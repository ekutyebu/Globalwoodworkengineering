<?php
session_start();
include '../db_connection.php';

// Check if the user is logged in and is an admin
if (!isset($_SESSION['user']) || $_SESSION['user'] !== 'adminuser') { // Ensure this matches the session value in process_login.php
    header('Location: /Globalwoodworkengineering/index.php');
    exit();
}

$pageTitle = "Admin Dashboard - Global woodwork engineering";
include '../header.php';

// Handle user deletion
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['delete_user_id'])) {
    $deleteUserId = intval($_POST['delete_user_id']);
    $stmt = $conn->prepare("DELETE FROM users WHERE id = ?");
    $stmt->bind_param("i", $deleteUserId);
    $stmt->execute();
    header('Location: dashboard.php');
    exit();
}

// Fetch all users from the database
$stmt = $conn->prepare("SELECT id, email, username, created_at FROM users");
$stmt->execute();
$result = $stmt->get_result();
?>
<style>
    .admin-dashboard {
        padding-top: 4.5em; /* Reduced padding to bring it closer to the header */
    }
</style>
<section class="admin-dashboard">
    <div class="menu-page-container">
        <h1 class="dashboard-title">Admin Dashboard</h1>
        <table class="user-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Created At</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php while ($row = $result->fetch_assoc()): ?>
                    <tr>
                        <td><?php echo htmlspecialchars($row['id']); ?></td>
                        <td><?php echo htmlspecialchars($row['email']); ?></td>
                        <td><?php echo htmlspecialchars($row['username']); ?></td>
                        <td><?php echo htmlspecialchars($row['created_at']); ?></td>
                        <td>
                            <form method="POST" style="display:inline;">
                                <input type="hidden" name="delete_user_id" value="<?php echo $row['id']; ?>">
                                <button type="submit" class="delete-button">Delete</button>
                            </form>
                        </td>
                    </tr>
                <?php endwhile; ?>
            </tbody>
        </table>
    </div>
</section>
<?php include '../footer.php'; ?>
