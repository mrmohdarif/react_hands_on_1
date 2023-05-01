import logo from './logo.svg';
import './App.css';
import Button from './ButtonComponent/Button1';
import Box from './Boxcomponent/Box';
import Classcomponent from './Classcomponent';

function App() {
  return (
        <div className='App'>
        <h1 className='Top_heading'>Styling using Function and class component</h1>
        <Button/>
        
        {/* {this.state.ShowClasscomponent && <Classcomponent/>}
            {this.state.ShowFunctioncomponent && <Functioncomponent/>} */}
        {/* <Box/> */}
        </div>
  );
}

export default App;
