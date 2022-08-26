import { BrowserRouter, Routes as Switch } from 'react-router-dom';

import Routes from '../Routes';

import Nav from './Nav/Nav';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <header>
          <Nav />
        </header>

        <Routes />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
