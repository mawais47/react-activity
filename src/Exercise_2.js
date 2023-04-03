// use props to set heading 
const Header =(props)=>{
    return(
        <div>
            <h1>{props.heading}</h1>
            <h3>{props.slogan}</h3>
        </div>
    );
}
const Exercise_2=()=>{
    return (
        <Header heading="Welcome to baham." slogan="Reducing Carbon."/>
    );
}

export default Exercise_2;