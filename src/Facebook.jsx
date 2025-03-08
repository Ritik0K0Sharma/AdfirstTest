import { useEffect, useState } from "react";

const FacebookLogin = () => {
  const [user,setUser ] = useState(null);
  const appId = "969471788495701"; 
 setUser
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: 969471788495701,
        cookie: true,
        xfbml: true,
        version: "v22.0",
      });
    };
   console.log("1229");
    (function (d, s, id) {  
      let js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  const loginWithFacebook = () => {
    window.FB.login(
      function (response) {
        if (response.authResponse) {
          window.FB.api("/me", { fields: "name,email" }, function (response) {
            setUser(response);
          });
        } else {
          console.log("User cancelled login or did not fully authorize.");
        }
      },
      { scope: "email,public_profile" }
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Facebook Login</h2>
      {user ? (
        <div>
          <h3>Welcome, {user.name}!</h3>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <button onClick={loginWithFacebook} style={{ padding: "10px", fontSize: "16px" }}>
          Login with Facebook
        </button>
      )}
    </div>
  );
};

export default FacebookLogin;