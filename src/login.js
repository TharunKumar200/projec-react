import React from "react";
import './login.css';
import {FaUser, FaLock} from 'react-icons/fa'
import {Link} from "react-router-dom";
function Page(){

        return(

        <div className="back">
            <h1>Login</h1>
            <form>
                <div className="input">
                    <div className="input-container">
                        <input className="input-field" type = "text"  placeholder="UserName" required/>
                        <FaUser />
                    </div>
                    <div className="input-container">
                        <input className="input-field" type = "password"  placeholder="Password" required/>
                        <FaLock />
                    </div>
                    <br></br>
                    <div class = "linkpos">
                        <a className="visited" href="www.goole.com">forgot password?</a>
                    </div>
                    <br></br>
                    <br></br>
                    <Link to="/home"><input className = "signbutton" type= "submit" value="Sign In" /></Link>
                    <br></br>
                    <br></br>
                    <div class ="signup">
                    <Link to="/signup"><a class = "visited" href="www.goole.com">new? Sign up instead</a></Link>
                    </div>
                </div>
            </form>
           
        </div>

);
}
export default Page;
body
{
    background-color: white;
}
h1{
    position: fixed;
    width: 236px;
    height:69px;
    left: 45%;
    top: 90px;
    font-family: 'Montserrat';
    font-style: bold;
    font-weight: 700;
    font-size: 64px;
    line-height: 78px;
    color: #14A8FB;
}
.back{
    position: fixed;
    width: 790px;
    height: 700px;
    left: 325px;
    top: 90px;
    background: #EDEFEF;
    border-radius: 50px;
}
.input-field{
    padding: 10px;
    width: 50%;
    background: black;
    opacity: 1;
    font-family: 'Montserrat';
    font-style: normal;
    color: white;
    border-radius: 15px 20px;
}
.signbutton {
    font-family: 'Montserrat';
    font-style: normal;
    background-color: #22A6F0;
    color: white;
    padding: 15px 20px;
    border: none;
    cursor: pointer;
    text-align: center;
    width: 50%;
    opacity: 0.9;
    border-radius: 15px 20px;
    margin-left: 5%;
  }
  
.signbutton:hover {
    background-color: steelblue;
    opacity: 1;
}
.input-container {
    display: -ms-flexbox; /* IE10 */
    display: flex;
    width: 100%;
    margin-bottom: 15px;
}
.icon {
    padding: 10px;
    background: black;
    color: steelblue;
    min-width: 10px;
    text-align: center;
}
.input{
    position: absolute;
    width: 500px;
    height: 30px;
    left: 270px;
    top: 250px;
}
.visited{
    color: steelblue;
    background-color: transparent;
    font-family: 'Montserrat';
    font-style: bold;
}
.visited:hover{
    color: #2C9FF2;
    background-color: transparent;
}
.linkpos{
    padding-left: 200px;
}
.signup{
    font-family: 'Montserrat';
    font-style: normal;
    margin-left: 15%;
}
