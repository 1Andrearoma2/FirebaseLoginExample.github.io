<?php

// Connect to the database
$conn = new mysqli("localhost", "username", "password", "database");

// Check if the user is trying to register or login
if (isset($_POST["register"])) {
    // Get the user's input
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Hash the password
    $password_hash = password_hash($password, PASSWORD_DEFAULT);

    // Insert the new user into the database
    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $username, $password_hash);
    $stmt->execute();
    $stmt->close();

    echo "Registration successful!";
} elseif (isset($_POST["login"])) {
    // Get the user's input
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Get the user's hashed password from the database
    $stmt = $conn->prepare("SELECT password FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();
    $stmt->close();

    // Verify the password
    if (password_verify($password, $user["password"])) {
        echo "Login successful!";
    } else {
        echo "Invalid username or password";
    }
}

// Close the database connection
$conn->close();

?>
