import React, { Component } from 'react'


export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      hsl: 0
    };
    this.divStyle ={
      backgroundColor: `hsl(${this.state.hsl}, 100%, 50%)`
    }
  
  }

  handleIncrease = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  handleDecrease = () => {
    if (this.state.count < 1 && this.state.count ===0) {
      this.setState({
        count: 0   
      })
      alert('You have reached the minimum count limit')
    } else {
      this.setState({
        count: this.state.count - 1
      })
    }
  }

  handleColorChange1=()=>{
    this.setState({
      hsl:this.state.hsl +30
    })
    this.divStyle ={
      backgroundColor: `hsl(${this.state.hsl}, 100%, 50%)`
    }
  }
  handleColorChange2=()=>{
    this.setState({
      hsl:this.state.hsl -19
    })
    this.divStyle ={
      backgroundColor: `hsl(${this.state.hsl}, 100%, 50%)`
    }
  }

  handleIncreaseClick=()=>{
    this.handleIncrease();
    this.handleColorChange1();
  }

  handleDecreaseClick = ()=>{
    this.handleDecrease();
    this.handleColorChange2();
}

render() {
    const {count}= this.state
    return (
      <div className='count' style={this.divStyle}>
        <center>
          <h1>{count}</h1>
          <div>
            <button onClick={this.handleIncreaseClick}>Click to Increase</button>
            <button onClick={this.handleDecreaseClick}>Click to Decrease</button>

          </div>
        </center>
      </div>
    )
  }
}

export default App

