import React,{Component} from 'react';

export default class Name extends Component {
    timee = () => {
        for(let i = 1;i<=10;i++){
            setTimeout(function time(){
                console.log(`第${i}秒`);
            },i*1000)
        }
    }

    render(){
        const {name,func} = this.props;
        return(
            <div className="name">
                {name}
                <br/>
                <button onClick={func} style={{margin:'20px'}}>Now</button>
                <button onClick={this.timee} style={{margin:'20px'}}>Test</button>
            </div>
        )
    }
}