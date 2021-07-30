import logo from './logo.svg';
import './App.css';
import HomeContainers from './containers/HomeContainers';
import HeaderContainer from './containers/HeaderContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
       <HomeContainers />
    </div>
  );
}

export default App;
