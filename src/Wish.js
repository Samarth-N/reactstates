import React from "react";
class Wish extends React.Component{
    constructor (props){
        super(props);
        this.state={name:"sammu", age:22}
    }
    render(){
        return(
            <div>
            <h1>Hi how are you {this.state.name}  my age is {this.state.age} </h1>
            </div>
        );
    }
}

export default Wish;