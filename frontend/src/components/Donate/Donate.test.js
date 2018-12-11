import React from 'react';
import ReactDOM from 'react-dom';
import Donate from './Donate';

// Renders the app without crashing
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Donate />, div);
  ReactDOM.unmountComponentAtNode(div);
});
