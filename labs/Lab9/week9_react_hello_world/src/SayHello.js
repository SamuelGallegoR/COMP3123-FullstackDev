function SayHello(props){
    //const name = "Samuel"
    const myStyle = {
        color: "white",
        backgroundColor: "purple"
    }
    return (
        <h1 style={myStyle}>Hey {props.fname}, say hello to my little friend! Bye {props.lname}</h1>
    )
}

export default SayHello;