import React from 'react';
import ReactDOM from 'react-dom';
import Events from './Events';
import '../../extra/material.js';

window.matchMedia = window.matchMedia || function() {
  return {
      matches : false,
      addListener : function() {},
      removeListener: function() {}
  };
};

// Renders the app without crashing
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Events />, div);
  ReactDOM.unmountComponentAtNode(div);
});
