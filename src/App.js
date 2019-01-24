import React, { Component } from 'react';
import loadable from '@loadable/component';
import { Subscribe } from 'unstated';
import ModelContainer from './ModelContainer';
import logo from './logo.svg';
import './App.css';

// Lazy load component
const Foods = loadable(() => import(/* webpackPrefetch: true */ './Foods'), { fallback: <h2>Loading...</h2> });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.mContainer = new ModelContainer({ ...props });
 }
  render() {
    return (
      <Subscribe to={[this.mContainer]}>
        { (modelContainer) => {
          return (
            <div style={{textAlign: 'center'}}>
              <Foods {...modelContainer.state}/>
            </div>
          )
        }}
      </Subscribe>
    );
  }
}

export default App;
