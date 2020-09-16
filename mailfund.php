<?php
$postData = $uploadedFile = $statusMsg = '';
$msgClass = 'errordiv';
    // Get the submitted form data
    $postData = file_get_contents('php://input');
    $dataFromPost = json_decode($postData, true);
    $data = $dataFromPost['data'];
    $type = $dataFromPost['type'];
    $description = $dataFromPost['description'];
    
    // Check whether submitted data is not empty
    
    
        $uploadStatus = 1;
        
        // Recipient
        $toEmail = 'pavellled@gmail.com';
        $toEmail2 = 'info@medcraft.fund';
        $toEmail3 = 's.bogatyuk@gmail.com';
        $toEmail4 = 'gyangicher@gmail.com';

        // Sender
        $from = 'info@medcraft.fund';
        $fromName = 'Медкрафт Фонд';
        
        // Subject
        $emailSubject = 'Новая заявка';

        // Message 
        $htmlContent = '<h2>Заявка</h2>
            <p><b>Способ связи:</b> '.$data.'</p>
            <p><b>Контактная информация:</b> '.$type.'</p>
            <p><b>Описание:</b> '.$description.'</p>';
        
        // Header for sender info
        $headers = "From: $fromName"." <".$from.">";
                // Set content-type header for sending HTML email
        $headers .= "\r\n". "MIME-Version: 1.0";
        $headers .= "\r\n". "Content-type:text/html;charset=UTF-8";
        
        // Send email
        $mail = mail($toEmail, $emailSubject, $htmlContent, $headers);    

        $mail = mail($toEmail2, $emailSubject, $htmlContent, $headers);     
        
        $mail = mail($toEmail3, $emailSubject, $htmlContent, $headers);     
        
        $mail = mail($toEmail4, $emailSubject, $htmlContent, $headers);     

        // If mail sent
        if($mail){
            $statusMsg = 'Your contact request has been submitted successfully !';
            $msgClass = 'succdiv';
            
            $postData = '';
        }else{
            $statusMsg = 'Your contact request submission failed, please try again.';
        }
?>
