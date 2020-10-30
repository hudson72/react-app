// Example 2 - stylowanie za pomocą arkuszy stylów i klas:

import React, { Component } from 'react';
import './App1.css';
import Text from './Text';

class App1 extends Component {
    state = { 

        underline: false
     }
    render() { 
        // // Example 1:
        // const text = 'Hello!';
        // let classes = '';

        // if(this.state.underline) classes += ' line';
        // if(text.length > 5) classes += ' big';

        // Example 2:
        const text = 'Hello!';
        const classes = ['one'];
        if(text.length > 5) classes.push('big');
        if(this.state.underline) classes.push('line');
        

        return ( 
            <div className="app1" onClick={() => this.setState({ underline: !this.state.underline})}>
                <h1 className={classes.join(' ')}>{text}</h1>
                <Text/>
            </div>
         );
    }
}
  
export default App1;