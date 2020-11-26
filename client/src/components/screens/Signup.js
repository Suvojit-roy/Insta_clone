import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import M from 'materialize-css'


const Signup=()=>{
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const history=useHistory()

    

    const PostData= ()=>{
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            M.toast({html:"Invalid email",classes:"#f44336 red"});
            return;
            // setEmail()
        }
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html:data.error,classes:"#f44336 red"});
            }
            else{
                M.toast({html:data.message,classes:"#1de9b6 teal accent-3"});
                history.push("/signin")
            }
                
        }).catch(err=>{
            console.log(err);
        })
        
    }


    return(
        <div>
      <div className="mycard">
            <div className="card auth-card">
                <h2>Instagram</h2>
                <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event)=>setName(event.target.value)}
                />
                <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
                />
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event)=>setPassword(event.target.value)}
                />
                <button onClick={PostData} className="btn waves-effect waves-light #42a5f5 blue darken-1">
                    SignUp
                </button> 
                <h5>
                    <Link to="/signin">Already have an account?</Link>
                </h5>
            </div>
      </div>
    </div>
        
    )
}

export default Signup;