import React,{useEffect} from 'react'

export const  Form1 = () => {

    const [username, setUsername] = React.useState('');
    const [password, SetPassword] = React.useState('');

    useEffect(() => {

        console.log("username is "+username)
        console.log("password is "+password)

    }, [password,username]);

    return (
        <>
        
        <div className={"Container"}>
            <div className={"row"}>
            <div className={"pl-4"}>
                <label for="email">Email address:</label>
                <input type="email" onChange={(e) => setUsername(e.target.value)} class="form-control" id="email" />
            </div>
            </div>
            <div className={"row"}>
            <div className={"pl-4"}>
                <label for="passowrd">Password:</label>
                <input type="password"  onChange={(e) => SetPassword(e.target.value)} class="form-control" id="password"  />
            </div>
            
            </div>
            <button className={"btn btn-primary ml-4"}>Login</button>
       </div>
   
    </>
    )


}
