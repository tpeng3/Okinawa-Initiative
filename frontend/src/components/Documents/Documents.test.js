import React from 'react';
import ReactDOM from 'react-dom';
import Documents from './Documents';

// Renders the app without crashing
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Documents />, div);
  ReactDOM.unmountComponentAtNode(div);
});
