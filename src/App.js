import React, { Component } from 'react'
import { 
  Navigator
} from 'react-onsenui'
import Login from './pages/Login/Login'
import { setNavigator } from './redux/ui/ui.sagas'

class App extends Component {

  renderPage (route) {
    return <route.component key={route.key} {...route.props} />
  }

  render () {
    return (
      <Navigator
        ref={n => setNavigator(n)}
        renderPage={this.renderPage}
        initialRoute={{
          component: Login,
          key:'Login'
        }}
      />
    );
  }
}

export default App
