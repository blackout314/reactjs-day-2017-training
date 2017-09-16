import React, { Component } from 'react'
import {
    Page,
    Toolbar,
    Input,
    Button,
    Icon
} from 'react-onsenui'
import { connect } from 'react-redux'
import * as actions from '../../redux/core/core.actions'
import * as uiActions from '../../redux/ui/ui.actions'

class Home extends Component {

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

    render() {
        return (
            <Page renderToolbar={this.renderToolbar}>
                <section style={{ textAlign: 'center' }}>
                    <p>
                        <Input
                            value={this.props.username}
                            onChange={event => this.props.dispatch(uiActions.onChangeUsername(event.target.value))}
                            autocomplete='off'
                            modifier='underbar'
                            float
                            placeholder='Username' />
                    </p>
                    <p>
                        <Input
                            value={this.props.password}
                            onChange={event => this.props.dispatch(uiActions.onChangePassword(event.target.value))}
                            autocomplete='off'
                            modifier='underbar'
                            type='password'
                            float
                            placeholder='Password' />
                    </p>
                    <p>
                        <Button 
                            disabled={this.props.loginDisabled}
                            onClick={() => this.props.dispatch(actions.loginRequest(this.props.username, this.props.password))}>
                                Login
                        </Button>
                    </p>
                    <p style={{fontSize: 'big', color: 'red'}}>
                        {this.props.error}
                    </p>
                </section>
            </Page>
        );
    }
}

const mapStateToProps = state => ({
    username: state.ui.username,
    password: state.ui.password,
    loading: state.ui.loading,
    error: state.core.loginError,
    loginDisabled: !state.ui.username || !state.ui.password
})

export default connect(mapStateToProps)(Home)
