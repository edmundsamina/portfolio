import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';


function App() {
  return (
    <>   
      <Header/> 
      <main className="main">
        <Home/>
      </main>
      <About/>
   
      
    </>
  );
}

export default App;
