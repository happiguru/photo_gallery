let login = false;
console.log(login);
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
    if (result.response == ok) {
      console.log(result.json());
    }
  };
  signUp.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchSignup();
  });
};

signUpUsers();

const loginUser = () => {};
loginUser();
const router = () => {
  const profileLink = document.querySelector("#profile");
  const loginLink = document.querySelector("#login");
  const logoutLink = document.querySelector("#logout");
  const signUpLink = document.querySelector("#signup");

  if (!login) {
    profileLink.style.display = "none";
    logoutLink.style.display = "none";
  } else {
    loginLink.style.display = "none";
    signUpLink.style.display = "none";
  }
};
router();
function logout() {
  login = false;
}
