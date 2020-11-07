import React, { useState } from "react";

const Contact =()=> {
      const[name, setName]=useState("");
      const[password, setPassword]=useState("");

      const[username, setUsername]=useState("");
      const[pass, setPass]=useState("");

    const event1 =(event) =>{
        console.log(event.target.value);
        setName(event.target.value);
    };
    const event2 =(event) =>{
        console.log(event.target.value);
        setPassword(event.target.value);
    };

    const onSubmits =(event) =>{
        event.preventDefault();
setUsername={name};
setPass={password};


 };
    return(
    <>
    <div>
    <div>
        <h1>Login with {username} {pass}</h1>
    </div>
    <form onSubmit={onSubmits}>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" value={username} aria-describedby="emailHelp" onChange={event1}/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="text"  value={pass}className="form-control" onChange={event2}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
</>
            
    );
};

export default Contact;
