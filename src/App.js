import './App.css';
import Login from './Component/Pages/Authintication/Login/Login';
import Header from './Component/Pages/Genarel/Header/Header';
import Nav from './Component/Pages/Genarel/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Login/>
    </div>
  );
}

export default App;
