import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../src/index';
const App = () => {
  return (
    <div>
      <Button ariaLabel="">Hello</Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
