import React from 'react';
import ReactDOM from 'react-dom';
 import Header from "./components/Header";
// import {shw} from './components/Header';
// ReactDOM.render(<App />, document.getElementById("root"));
// import Login from "./components/loginpage";
import './components/joining';
// const signUpButton = document.getElementById('signUp');
// const signInButton = document.getElementById('signIn');
// const container = document.getElementById('container');

// signUpButton.addEventListener('click', () => {
// 	container.classList.add("right-pannel-active");
// });

// signInButton.addEventListener('click', () => {
// 	container.classList.remove("right-pannel-active");
// });

ReactDOM.render(<Header />, document.getElementById("root"));

// import fs from 'fs';
//   import http from 'http';
//   import path from 'path';
//   const server=http.createServer((req,res)=>{
//     if(req.url==="/"){
//       fs.readFile(path.join(__dirname,'src','index.html'),(err,content)=>{
//         if(err)throw err;
//         res.end(content);
//       });
//     }
//     if(req.url==="/login"){
//       fs.readFile(path.join(__dirname,'public','progrssbar.jsx'),(err,content)=>{
//         if(err)throw err;
//         res.end(content);
//       })
//     }
//   });
//   const PORT=process.env.PORT || 6060;
//   server.listen(PORT,()=>{console.log(`listening on port ${PORT}`)});
  