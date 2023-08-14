import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.jsx';

class Main extends React.Component {
  render() {
    return <App />;
  }
}

const rootElement = document.getElementById('root');
// eslint-disable-next-line react/no-deprecated
ReactDOM.render(<Main />, rootElement);
