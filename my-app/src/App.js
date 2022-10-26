import './App.css';
import Cat from './components/Cat'
import ButtonComponent from './components/ButtonComponent';

//root component
function App() {
  return (
    <div className="App">
      <header className="App-header" >
        <p>
        Hello 
        </p>

        <div className="flex">
        <Cat colour="#eb9e34" name="Tabitha" lackOfCommonSense={false} />
          <Cat colour="#f2f2d0" name="Mog" lackOfCommonSense={false} />
          <Cat colour="#f2e2d0" name="Sam" lackOfCommonSense={true} />
          <ButtonComponent/>
        </div>
      </header>
    </div>
  );
}

export default App;

