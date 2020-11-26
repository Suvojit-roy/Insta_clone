import React, { useContext, useEffect, useState } from 'react'
import {UserContext} from '../../App'

const Profile=()=>{

    const [data,setData]=useState([])
    const {state,dispatch}=useContext(UserContext)
    useEffect(()=>{
        fetch("/mypost",{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setData(result.mypost)
        })
    },[])
    return(
        <>
        <div style={{maxWidth:"90%",margin:"0 auto"}}>
            <div  style={{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"1px solid grey"}}>

                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                    src="https://images.unsplash.com/photo-1575224889663-4d96137aac12?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfDJ8MHw%3D&auto=format&fit=crop&w=600&q=60"/>
                </div>
                <div>
                    <h4>{state?state.name:"loading"}</h4>
                    <div style={{display:"flex",justifyContent:"space-between",width:"109%"}}>
                        <h6>40 posts</h6>
                        <h6>40 followers</h6>
                        <h6>40 following</h6>
                    </div>
                </div>
            </div>
            <div className="gallery">
            {data.map(item=>{
                return <img key={item._id} className="item card" src={item.photo} alt={item.title}/>
            })}
                
            </div>
        </div>
        </>
        
    )
}

export default Profile;