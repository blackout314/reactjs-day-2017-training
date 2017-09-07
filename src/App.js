import React, { Component } from 'react'
import { 
  Page, 
  Toolbar, 
  List
} from 'react-onsenui'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      list: []
    }
  }

  onSubmit = (value) => {
    this.setState({
      list: [...this.state.list, {
        value,
        checked: false
      }]
    });
  }

  onCheckboxChange = index => {
    const element = this.state.list[index];
    element.checked = !element.checked;
    this.setState({
      list:this.state.list
    });
  }

  onDeleteClick = index => {
    this.state.list.splice(index, 1)
    this.setState({
      list:this.state.list
    });
  }
  
  renderToolbar = () => {
    return (
      <Toolbar>
        <div className='center'>Grocery List</div>
      </Toolbar>
    );
  }

  renderTodo = (todo, index) => {
    return (
      <TodoItem 
        key={index} 
        todo={todo} 
        onCheckboxClick={() => this.onCheckboxChange(index)} 
        onDeleteClick={() => this.onDeleteClick(index)} />
    );
  }

  render () {

    const todos = this.state.list.map(this.renderTodo);

    return (
      <Page renderToolbar={this.renderToolbar}>
        <List>
          <TodoForm onSubmit={this.onSubmit}/>
          {todos}
        </List>
      </Page>    
    );
  }
}

export default App
