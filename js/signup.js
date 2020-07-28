const signUpUsers = () => {
  const userName = document.querySelector("#name");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const confirm = document.querySelector("#confirmpassword");
  const signUp = document.querySelector("#signupForm");

  const fetchSignup = () => {
    try {
      const result = fetch("http://localhost:3000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName.value,
          email: email.value,
          password: password.value,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
  signUp.addEventListener("submit", (e) => {
    fetchSignup();
  });
};

signUpUsers();
