import React, { Component } from 'react'
import { 
  Page, 
  Toolbar, 
  List,
  Icon
} from 'react-onsenui'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { connect } from 'react-redux'
import * as actions from './redux/core/core.actions'
import * as uiActions from './redux/ui/ui.actions'

class App extends Component {

  componentWillMount() {
    this.props.dispatch(actions.readTodos())
  }

  onSubmit = (value) => {
    this.props.dispatch(actions.addRequest(value));
  }

  onCheckboxChange = index => {
    this.props.dispatch(actions.toggleRequest(index));
  }

  onDeleteClick = index => {
    this.props.dispatch(uiActions.askDelete(index));
  }

  renderIcon = () => {
    if(!this.props.loading){
      return <noscript />
    }

    return <Icon spin icon='md-spinner' />
  }
  
  renderToolbar = () => {
    return (
      <Toolbar>
        <div className='center'>Grocery List</div>
        <div className='right' style={{textAlign:'center'}}>
          {this.renderIcon()}
        </div>
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

const mapStateToProps = state => ({
  todos:state.core.list,
  loading: state.ui.loading
})

export default connect(mapStateToProps)(App)
