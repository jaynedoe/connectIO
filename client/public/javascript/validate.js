function validateCreateAccount() {
    let boolReturn = true;

    if (document.getElementById("first-name").value.length === 0) {
      document.getElementById("first-name-message").innerHTML =
        "<em>Please enter your first name.</em>";
      boolReturn = false;
    }

    if(document.getElementById("last-name").value.length === 0){
        document.getElementById("last-name-message").innerHTML = 
        "<em>Please enter your last name.</em>";
        boolReturn = false;
    }

    if(document.getElementById("username").value.length === 0){
        document.getElementById("username-message").innerHTML = 
        "<em>Please enter a username.</em>";
        boolReturn = false;
    }

    if(document.getElementById("password-choose").value.length === 0){
        document.getElementById("password-choose-message").innerHTML = 
        "<em>Please choose a password.</em>";
        boolReturn = false;
    }

    if(document.getElementById("password-confirm").value.length === 0){
        document.getElementById("password-confirm-message").innerHTML = 
        "<em>Please confirm your password.</em>";
        boolReturn = false;
    }

    if(document.getElementById("postcode").value.length === 0){
        document.getElementById("postcode-message").innerHTML = 
        "<em>Please enter your postcode.</em>";
        boolReturn = false;
    }
 

    if (boolReturn) {
      return true;
    } else {
      return false;
    }
  }

  function validateLogin(){
      let boolReturn = true;

      if(document.getElementById("username-or-email").value.length === 0){
        document.getElementById("username-or-email-message").innerHTML = 
        "<em>Please enter a username or email.</em>";
        boolReturn = false;
      }

      if(document.getElementById("login-password").value.length === 0){
        document.getElementById("login-password-message").innerHTML = 
        "<em>Please enter a password.</em>";
        boolReturn = false;
      }

      if(boolReturn) {
          return true;
      } else {
          return false;
      }
  }

  