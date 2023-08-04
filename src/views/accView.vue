<template>
    <div class="containeracc">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr>
  
      <label for="emaill"><b>Email</b></label>
      <input type="textt" placeholder="Enter Email" name="email" id="email" required>
  
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" id="psw" required>
  
      <label for="psw-repeat"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>
      <hr>
      <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
  
      
      <RouterLink :to="{name:'Home'}" ><button type="submit" class="registerbtnn">Register</button></RouterLink>
      <div>
      <p>Already have an account? <a href="#">Sign in</a>.</p>
    </div>
    </div>
    
</template>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}

* {
  box-sizing: border-box;
}

/* Add padding to containers */
.containeracc {
  padding: 16px;
  background-color: lavender;
}
.containeracc p{
    text-align: center;
}

/* Full-width input fields */
input[type=textt], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=textt]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit button */
.registerbtnn {
  background: linear-gradient(to right, #C9B1FF, #FFCAF2, #FFB2B1, #FFF3AD, #BCFFBC, #A2EDFF);
  background-color: white;;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtnn:hover {
  opacity: 1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}
</style>