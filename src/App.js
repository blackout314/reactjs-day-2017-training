import React, { Component } from 'react'
import { 
  Page, 
  Toolbar, 
  List
} from 'react-onsenui'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { connect } from 'react-redux'
import * as actions from './redux/actions'

class App extends Component {

  componentWillMount() {
    this.props.dispatch(actions.readTodos())
  }

  onSubmit = (value) => {
    this.props.dispatch(actions.add(value));
  }

  onCheckboxChange = index => {
    this.props.dispatch(actions.toggle(index));
  }

  onDeleteClick = index => {
    this.props.dispatch(actions.deleteItem(index));
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

    const todos = this.props.todos.map(this.renderTodo);

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

const mapStateToProps = state => ({todos:state.list})

export default connect(mapStateToProps)(App)
