import React from 'react';
import ReactDOM from 'react-dom';
import DocPage from './DocPage';

// Renders the app without crashing
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DocPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
