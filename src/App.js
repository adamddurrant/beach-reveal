import "./App.css";
import Header from "./components/header.js";
import Main from "./components/main.js";
import VideoContextProvider from "./contexts/VideoContext.js";
import Overlay from "./components/overlay";

function App() {
  return (
    <VideoContextProvider>
      <div className='App bg-main-pattern top-0 left-0 h-full w-full'>
        <Overlay />
        <Header />
        <Main />
      </div>
    </VideoContextProvider>
  );
}

export default App;
