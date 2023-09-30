import "./App.css";
import Header from "./Components/Header/Header";
import SimpleNavigation from "./Components/Main-Nav/main-nav";
import Trending from "./Pages/Trending/Trending";
function App() {
  return (
    <>
      <Header />;
      <div className="App">
        <Trending />
        <SimpleNavigation />
      </div>
    </>
  );
}

export default App;
