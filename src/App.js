import './App.css';
import CardsContainer from './components/CardsContainer';
import SearchBar from './components/SearchBar';
import AnimalState from './context/animals/AnimalState';

function App() {
  return (
    <div className="App">
      <AnimalState>
        <SearchBar />
        <CardsContainer />
      </AnimalState>
    </div>
  );
}

export default App;
