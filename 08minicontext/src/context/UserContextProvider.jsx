import React from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{
const [user,setUser]=React.useState(null) 
return(
    <UserContext.Provider value={{user,setUser}}>
        {children} 
    </UserContext.Provider>
)
}

export default UserContextProvider

// line no8 this children will hold all type of components like login,signup....
// line no.4 this is kind of data we are getting from any operations just like any api