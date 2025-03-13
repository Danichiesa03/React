import "./App.css";
import AlertClick from "./components/AlertClick";

function App() {
  function HandleButtonClick() {
    const now = new Date();
    alert(`L'ora attuale è: ${now.toLocaleDateString()}`);
  }
  return (
    <>
      <AlertClick onClick={HandleButtonClick}></AlertClick>
    </>
  );
}

export default App;
