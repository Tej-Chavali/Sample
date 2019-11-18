import React,{ Component} from 'react';

class TodoItem extends Component {
    getStyle=() => {
        return{
            backgroundColor:'yellow',
            padding:'20px',
            textDecoration:this.props.to.completed?'none':'line-through'
        }
     
    }
    render() {
        const todocontent1=this.props.to.map((tod)=>(<div key={tod.id}>{tod.title}</div>));
        return (
            <div style={this.getStyle()}>
                {todocontent1}
            </div>
        )
    }
}

/*const itemStyle={
    backgroundColor:'#f4f4f4'

}*/
export default TodoItem;