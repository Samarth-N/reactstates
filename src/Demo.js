import React from "react";
class Demo extends React.Component{
    constructor (props){
        super(props);
        this.state={sub:"please subscribe", btn:"subscribe"}

    changeButton = ()=>{
            this.setState({sub:"thank you for subscribing", btn:"subscribed"})}
   
            render(){
                return(
                <div>
                    <p>{this.state.sub}</p>
                    <button Onclick={this.changeButton}>{this.state.btn}</button>
                </div>
                );
            }
            }
    }
}


export default Demo;