import React,{Component} from 'react';
import TodoItem from './TodoItem';
//import PropTypes from 'prop-types';
class Todos extends Component {
    render() {
        const todocontent=this.props.todo.map((tod)=>(<div key={tod.id}>{tod.title}</div>));
        return(<div>
            {todocontent}
            <TodoItem to={this.props.todo}/>

            </div>);
    }
}

export default Todos;