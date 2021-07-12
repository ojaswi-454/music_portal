import React from "react";
import './footer.css';
function Footer() {
    return (
    <>
        <div className="footer">
        
            <div class="container">
                <div className="row">
                    <div class="box12">
                    <div class="t1">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div class="t2">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    </div>
                    <div class="subscribe">
                        <h3>Subscribe : </h3>
                        
                            <div class="email">
                                <div>

                             <a> <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" class="form-control border-0 shadow-0"/></a>
                                </div>
                              <div class="#">
                                <button id="go" type="submit" class="btn btn-link">Go</button>
                              </div>
                            </div>
                        
                    </div>
                    <div class="sym">
                        <a href="#" class="social"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="social"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <p class="copyright">Company Name © 2018</p>
            </div>
        
    </div>
    
    </>
    );
}

export default Footer;