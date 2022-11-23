import Home from "./components/Home";
import './App.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import InfoPage from "./components/InfoPage/InfoPage";
function App() {
  return (
    <div className="App">
		<Header/>
		<Home/>
		<InfoPage/>
		<Footer/>
    </div>
  );
}

export default App;
