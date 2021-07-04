import React from "react";
// import "./loginpage.css"
// import './joining'
// import scripts from 'scripts';


function JoinPage(){
//     const signUpButton = document.getElementById('signUp');
// const signInButton = document.getElementById('signIn');
// const container = document.getElementById('container');

// signUpButton.addEventListener('click', () => {
// 	container.classList.add("right-pannel-active");
// });

// signInButton.addEventListener('click', () => {
// 	container.classList.remove("right-pannel-active");
// });
    return(
        <>
        <div class="container " id="container">
      <div class="form-container signUp-container">
        <form action="#">
          <h1>Creat a New Account</h1>
          <div class="social-container">
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use you Email to Login..</span>
          <input type="text" placeholder="User Name" />
          <input type="email" placeholder="Email-I'd" />
          <input type="password" placeholder="PassWord" />
          <button>sign Up</button>
        </form>
      </div>
      <div class="form-container signIn-container">
        <form action="#">
          <h1>Sign In</h1>
          <div class="social-container">
            <a href="#" class="social"><i class="fab fa-facebook"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use you Email to signIn..</span>
          <input type="email" placeholder="User Name" />
          <input type="password" placeholder="PassWord" />
          <a href="#">Forget Password ?</a>
          <button>sign In</button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-pannel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button class="ghost" id="signIn">Sign In</button>
          </div>
          <div class="overlay-pannel overlay-right">
            <h1>Hello,Friend !</h1>
            <p>
              please Enter your personal info and start your journey with us...
            </p>
            <button class="ghost" id="signUp">sign Up</button>
          </div>
        </div>
      </div>
      <footer>
        <p>
          Created with <i class="fa fa-heart"></i> by
          <a target="_blank" href="https://florin-pop.com">Florin Pop</a>
          -contact Us
          <a target="_blank" href="https://www.instagram.com/nileshsprajapati/"
            >here</a
          >.
        </p>
      </footer>
    </div>
        </>
    )
}
export default JoinPage;