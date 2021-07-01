import { Button } from '@material-ui/core';
import logo from './logo.svg';
import './App.css';

function App(): JSX.Element {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button
          color='secondary'
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
          variant='contained'
        >
          Learn React
        </Button>
      </header>
    </div>
  );
}

export default App;
