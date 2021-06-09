import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <span>Hello World!</span>
    </div>
  )
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);