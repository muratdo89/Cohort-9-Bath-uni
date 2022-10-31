import './App.css';
import Cat from './components/Cat'
import Dog from './components/Dog'
import Box from './components/Box';
import Form from './components/Form/index';

//root component
function App() {
  const cssStyles={
    backgroundColor: 'white'
  }
  return (
    <div className="App">
      <header className="App-header" stye={cssStyles} >
        <p>
        Hello 
        </p>

        {/* <div className="flex">
        <Cat colour="#eb9e34" name="Tabitha" lackOfCommonSense={false} />
          <Cat colour="#f2f2d0" name="Mog" lackOfCommonSense={false} />
          <Cat colour="#f2e2d0" name="Sam" lackOfCommonSense={true} />
        </div>
        <div className="flex">
        <Dog colour="#eb9e34" name="Fido" dogYears={4} />
        </div>
        <div>
        <Box>box</Box>
        </div> */}
        
      <Form />
      </header>
    </div>
  );
}

export default App;

