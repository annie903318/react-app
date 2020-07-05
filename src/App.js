import React,{Component} from 'react';
import Name from './component/Name';
import HelloWorld from './component/HelloWorld';
import CountBtn from './component/CountBtn';

import './App.css';

export default class App extends Component{
  state = {
    name:'Annie',
    num:0
  }
  func = () => {
    alert(`現在時間: ${Date()}`)
  }
  cntMinus = () => {
    if(this.state.num===0){
      alert("不可以<0")
    }else{
      this.setState((num) => ({num : this.state.num - 1 }))
    }
  }
  cntPlus = () => {
    this.setState((num) => ({num : this.state.num + 1 }))
  }
  render(){
    const {name,num} =this.state;
    
    return (
      <div className="App">
        <HelloWorld text="Hello World!!!!"/>
        <HelloWorld text="wwwwwwwwwwww"/>
        <Name
          name={name}
          func={this.func}
        />
        <div style={{ display:'inline'}}>
          <button name="minus" onClick={this.cntMinus} style={{margin:'20px'}}>-</button>
          <CountBtn number={num}/>
          <button name="plus"  onClick={this.cntPlus} style={{margin:'20px'}}>+</button>
        </div>
      </div>
    )
  }
}