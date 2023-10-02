function validateForm(event) {
   event.preventDefault(); // Prevent form submission
 
   // Get form values
   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const date = document.getElementById('date').value;
   const time = document.getElementById('time').value;
   const guests = document.getElementById('people').value;
 
   // Check if all fields are filled
   if (!name || !email || !date || !time || !guests) {
     alert('Please fill in all fields');
     return ;
   }
 
   // Validate email format
   const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if (!emailRegex.test(email)) {
     alert('Please enter a valid email address');
     return ;
   }
 
   // Validate number of guests
   else if (guests <= 0) {
     alert('Please enter a valid number of guests');
     return ;
   }
 
   // If all validations pass, proceed with booking or further processing
   // Here you can make an AJAX request to submit the form data to the server for booking
 
   alert('Table booked successfully!');
 }
 
 // Attach event listener to the form's submit button
 const form = document.getElementById('reservationForm');
 form.addEventListener('submit', validateForm);
 