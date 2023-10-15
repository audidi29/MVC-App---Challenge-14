document.addEventListener('DOMContentLoaded', function() {
    // Get the signup form element
    var signupForm = document.getElementById('signupForm');
  
    // Add event listener for form submission
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting normally
  
      // Get form data
      var username = document.getElementById('username').value;
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
  
      // Perform form validation if needed
  
      // Send form data to the server using fetch API
      fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password
        })
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        // Handle successful server response
        console.log(data); // You can customize this based on your response from the server
        // Redirect to the home page or any other page after successful signup
        window.location.href = '/signup.html'; 
      })
      .catch(error => {
        // Handle errors
        console.error(error);
        // Display an error message to the user if needed
      });
    });
  });
