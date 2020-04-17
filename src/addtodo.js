import React, {Component} from 'react';

class Addtodo extends Component{
    state={
        content: ' '
    }
    handlechange=(e)=>{
        this.setState({
            content: e.target.value
        })
    }
    handlesubmit = (e)=>{
        e.preventDefault();
        console.log(this.state)
        this.props.addtolist(this.state);
        this.setState({
            content:' '
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handlesubmit}>
                <label>add new todo:</label>
                <input type="text" onChange={this.handlechange} value={this.state.content}/ >
                </form>
            </div>
        )
    }
}
export default Addtodo;