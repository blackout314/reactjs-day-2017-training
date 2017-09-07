import React, { Component } from 'react'
import { 
  Page, 
  Toolbar, 
  List
} from 'react-onsenui'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import todos from './model/todos'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      list: todos.get()
    }
  }

  onSubmit = (value) => {
    this.setState({
      list: todos.add(value)
    });
  }

  onCheckboxChange = index => {
    this.setState({
      list:todos.markAsDone(index)
    });
  }

  onDeleteClick = index => {
    this.setState({
      list:todos.deleteItem(index)
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
