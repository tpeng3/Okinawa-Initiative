import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery';

// Renders the app without crashing
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Gallery />, div);
  ReactDOM.unmountComponentAtNode(div);
});
