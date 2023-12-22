function submitForm(event) {
    event.preventDefault();
  
    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Log the values to the console
    console.log('Email:', email);
    console.log('Password:', password);
  
    // Simulate sending the data to an email address (for demonstration purposes)
    const recipientEmail = 'fedjostayomide@gmail.com';
    console.log(`Sending data to ${recipientEmail}`);
  }
  
  