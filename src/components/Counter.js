import React, { Component } from  'react'
import { tsPropertySignature } from '@babel/types'
class Counter extends Component {
    constructor (props){
        super(props)
        this.state={
            count:0
        }
        this.increment=this.increment.bind(this);
    }
    increment() {
    //     this.setState({
    //         count:this.state.count+1

    //     },() => {
    //         console.log('callBack value',this.state.count)
    //     }
    //     )
    //     console.log(this.state.count)
    // }
   
    this.setState(prevState => ({
        count:prevState.count+1
    }))
    console.log(this.state.count)
    }
    incrementThree() {
        this.increment()
        this.increment()
        this.increment()
    }

    render()
    {
        return (
            <div>
            <div>Count-{this.state.count}</div>
            <button onClick={()=>this.incrementThree()}>INCREMENT</button>
            <button onClick={this.increment}>onclick</button>
            </div>
            
        )
    }
}
export default Counter;