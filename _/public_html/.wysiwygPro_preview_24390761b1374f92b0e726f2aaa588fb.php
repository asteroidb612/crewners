<?php
if ($_GET['randomId'] != "rGhA5FhBemModaPe9Srjw7uEc7GYkTFy8JfAwt56jqza1Ms6Xx0EIOIGax8hijsL") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
