import React,{Component} from 'react';

export default class HelloWorld extends Component {
    render(){
        let {number}=this.props;
        return(
            <input type="text" placeholder="Enter number" value={number}/>
        )
    }
}