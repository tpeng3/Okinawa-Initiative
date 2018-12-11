import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';

// Renders the app without crashing
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<About />, div);
  ReactDOM.unmountComponentAtNode(div);
});
