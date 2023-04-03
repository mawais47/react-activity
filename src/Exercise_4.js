//use state hook
import { useState } from "react";
const Header=(props)=>{
    const [theme,setTheme]=useState({name: 'light',style:{backgroundColor:'white'}});
    function themeHandler(){
        //if theme is dark then switvh to light teheme
        if(theme.name==='dark'){
            setTheme({name: 'light',style:{backgroundColor:'white'}})
        }
        //if theme is light then switvh to dark teheme
        else if(theme.name==='light'){
            setTheme({name: 'dark',style:{backgroundColor:'grey'}})
        }
    }
    return(
        <div style={theme.style}>
            <p>welcome Baham, to in-campus ride sharing service</p>
            <button id="themeButton" onClick={themeHandler}>Swith Theme</button>
        </div>
    );
}
const Exercise_4=()=>{
    return (
        <Header heading="Welcome to baham." slogan="Reducing Carbon."/>
    );
}

export default Exercise_4;