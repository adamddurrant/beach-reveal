import "./App.css";
import Header from "./components/header.js";
import Main from "./components/main.js";
import VideoContextProvider from "./contexts/VideoContext.js";

function App() {
  return (
    <VideoContextProvider>
      <div className='App bg-main-pattern'>
        <Header />
        <Main />
      </div>
    </VideoContextProvider>
  );
}

export default App;
