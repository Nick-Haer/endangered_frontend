import logo from './logo.svg';
import './App.css';
import AnimalCardsContainer from './components/Animal/AnimalCardsContainer';

function App() {

  let bob: string = "billy";

  function multiply(x: number, y: number): void {
      console.log("bob");
  }

  const arr: any[] = [];

  interface Horror {
    name: string,
    occupation: string
  }

  const archonsOfTheEnd: Horror[] = [];

  archonsOfTheEnd.push({name: 'bob', occupation: 'eating the world and ice cream'})

  arr.push(5);
  arr.push('bob');
  arr.push({bill: 'bob'});

  return (
    <div className="App">
        <AnimalCardsContainer />
    </div>
  );
}

export default App;
