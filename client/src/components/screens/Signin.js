import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import M from 'materialize-css'

const Signin = () => {
    
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const history=useHistory()

    

    const PostData= ()=>{
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            M.toast({html:"Invalid email",classes:"#f44336 red"});
            return;
            // setEmail()
        }
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
          console.log(data)
            if(data.error){
                M.toast({html:data.error,classes:"#f44336 red"});
            }
            else{
                M.toast({html:"Signed In",classes:"#1de9b6 teal accent-3"});
                history.push("/")
            }
                
        }).catch(err=>{
            console.log(err);
        })
        
    }
  return (
    <div>
      <div className="mycard">
            <div className="card auth-card">
                <h2>Instagram</h2>
                <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
                // style={{textAlign:"center"}}
                />
                <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={(event)=>setPassword(event.target.value)}
                // style={{textAlign:"center"}}
                />
                <button onClick={PostData} className="btn waves-effect waves-light #42a5f5 blue darken-1">
                    Login
                </button> 
            </div>
      </div>
    </div>
  );
};

export default Signin;
