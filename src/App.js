import React, { Component } from 'react'
import { 
  Page, 
  Toolbar, 
  List, 
  ListItem, 
  Checkbox, 
  Input,
  Icon,
  Ripple
} from 'react-onsenui'

const STYLES = {
  form: {
    width: '85%'
  },
  input: {
    width: '100%'
  }
}

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      newElementValue: '',
      list: []
    }
  }

  onNewValueChange = (event) => {
    this.setState({
      newElementValue:event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      newElementValue: '',
      list: [...this.state.list, {
        value: this.state.newElementValue,
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

  renderList () {

    return this.state.list.map((element, index) => {

      let textStyle = {
        flexGrow: 8
      };
      
      if(element.checked){
        textStyle = {
          ...textStyle,
          textDecoration: 'line-through',
          color: '#999999'
        }
      }

      return(
        <ListItem>
          <div className='left'>
            <Checkbox onChange={() => this.onCheckboxChange(index)} checked={element.checked}/>
          </div>
          <div className='center' style={{display:'flex'}}>
            <span style={textStyle}>{element.value}</span>
            <div style={{flexGrow:2, textAlign: 'center'}} onClick={() => this.onDeleteClick(index)}>
              <Ripple />
              <Icon icon="fa-times-circle"/>
            </div>
          </div>
        </ListItem>
      );
    });
  }

  render () {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <List>
          <ListItem>
            <div className='left'>
              <Checkbox disabled/>
            </div>
            <div className='center'>
              <form style={STYLES.form} onSubmit={this.onSubmit}>
                <Input 
                  style={STYLES.input} 
                  value={this.state.newElementValue} 
                  onChange={this.onNewValueChange}
                  />
              </form>
            </div>
          </ListItem>
          {this.renderList()}
        </List>
      </Page>    
    );
  }
}

export default App
