import React, { Component } from 'react'
import { 
  ListItem, 
  Checkbox, 
  Input
} from 'react-onsenui'

const STYLES = {
  form: {
    width: '85%'
  },
  input: {
    width: '100%'
  }
}

class TodoForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
    }

    onValueChange = (event) => {
        this.setState({
            value:event.target.value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.value)
        this.setState({
            value: ''
        });
      }

    render() {
        return (
            <ListItem>
                <div className='left'>
                <Checkbox disabled/>
                </div>
                <div className='center'>
                    <form style={STYLES.form} onSubmit={this.onSubmit}>
                        <Input 
                        style={STYLES.input} 
                        value={this.state.value} 
                        onChange={this.onValueChange}
                        />
                    </form>
                </div>
            </ListItem>
        );
    }
}

export default TodoForm;