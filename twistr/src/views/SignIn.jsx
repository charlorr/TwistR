import React from "react";

class SignIn extends React.Component {
  render() {
    return (
      
      <div>
        <form method="post">
          
          <label for="uname"><b>Username</b></label>
          <input type="text" placeholder = "Enter Username" name ="uname" required></input>
          <label for ="pass"><b>Password</b></label>
          <input type ="password" placeholder = "Enter Password" name ="pass" required></input>
          <button type="submit">Login</button>

        </form>
      </div>
       
    );
  }
}

export default SignIn;
