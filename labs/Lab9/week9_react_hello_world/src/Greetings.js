import React, {Component} from 'react'

//Class based Component
class Greetings extends Component{
    render(){
        return(
            <div style={{color:'red', backgroundColor:'Yellow'}}>Greetings, {this.props.name}</div>
        )
    }
}

export default Greetings