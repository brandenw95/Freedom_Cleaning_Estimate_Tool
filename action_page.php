<?php 
    
    //header( "refresh:10; url=https://google.ca" ); 
    // Post data info

    // Client Personal/Contact Info
    $client_first_name = $_POST['firstname'];
    $client_last_name = $_POST['lastname'];
    $client_address = $_POST['address'];
    $client_phone_number = $_POST['number'];
    $client_email = $_POST['email'];
    $client_message = $_POST['note'];
    
    // cleaning Service Selected
    // Note: Strip end digits and underscores then add space between capitals using regex
    $cleaning_service_raw = rtrim($_POST['clean_service'], '_0123456789');
    $cleaning_service = preg_replace('/(?<!\ )[A-Z]/', ' $0', $cleaning_service_raw);
    $cleaning_service_base_price = substr($_POST['clean_service'], -3);
    
    // Pet and Family addon selected (none - EZ - regular)
    $pet_addon_service = $_POST['Pet_Package_Select'];
    $family_addon_service = $_POST['Family_Package_Select'];

    // Email to Freedom Cleaning and Organizing:
    $to = 'sales@radixmedia.ca';
    $subject = 'New client booking request from '.$client_first_name.' '.$client_last_name.'';
    $headers = array('Content-Type: text/html; charset=UTF-8');
    $message = '<br><br>
        <b>Client Name:</b> '.$client_first_name.' '.$client_last_name.'<br>
        <b>Client Phone Number:</b> '.$client_phone_number.'<br>
        <b>Client Email Address:</b> '.$client_email.'<br>
        <b>Base Package:</b> '.$cleaning_service.'<br>
        <b>Base Package Price:</b> '.$cleaning_service_base_price.'<br>
        <b>Pet Addon:</b> '.$pet_addon_service.' <br>
        <b>Family Addon:</b> '.$family_addon_service.' <br>
        <b>Addons:</b> <br>
        <br>
        <b>Total Estimated:</b> <br><br>
        <b>Note From Client:</b> '.$client_message.'
    ';
    // wp_mail( $to, $subject, $message, $headers);

    // Email to Client: (Disabled)
    // $client_to = 'sales@radixmedia.ca';
    // $client_subject = 'New client booking request from '.$client_first_name.' '.$client_last_name.'';
    // $client_headers = array('Content-Type: text/html; charset=UTF-8');
    // $client_message = '<br><br>
    //     <b>Client Name:</b> '.$client_first_name.' '.$client_last_name.'<br>
    //     <b>Client Phone Number:</b> '.$client_phone_number.'<br>
    //     <b>Client Email Address:</b> '.$client_email.'<br>
    //     <b>Base Package:</b> '.$cleaning_service.'<br>
    //     <b>Base Package Price:</b> '.$cleaning_service_base_price.'<br>
    //     <b>Pet Addon:</b> '.$pet_addon_service.' <br>
    //     <b>Family Addon:</b> '.$family_addon_service.' <br>
    //     <b>Addons:</b> <br>
    //     <br>
    //     <b>Total Estimated:</b> <br><br>
    //     <b>Note From Client:</b> '.$client_message.'
    // ';
    // wp_mail( $client_to, $client_subject, $client_message, $client_headers);

    echo '<head>
        <link rel="stylesheet" type="text/css" href="style.css"/>
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Quicksand" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="script.js"></script>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="multi-select.css">
    </head>';
        

    echo '<section class="confirm-section">';
        echo '<img src="bg8.jpg">';
        echo '<div class="confirm-columns">';
        echo '<div class="confirm-column-header"><h2>Thank you!</h2></div>';
            echo '<div class="confirm-column-content">';
                echo '<img class="checkmark" src="whitecheck.png">';
                echo '<p><b>Your message has been recieved and we will contact you within 24 hours.<b></p>';
                echo '<a href="https://freedomcleaning.ca"><button class="confirm-button">OK</button></a>';
                echo '<h5><b>(You will be redirected to the main page automatically)</b></h5>';
            echo '</div>';
        echo '</div>';
    echo '</section>';
?>