import { useState } from "react";
import "./App.css";
import Chat from "./components/Chat";
import Input from "./components/Input";

function App() {
  const [messages, setMessages] = useState([
    { text: "Ciao", isSent: true },
    { text: "Ciao, come stai?", isSent: false },
  ]);

  const sendMessage = (text) => {
    setMessages([...messages, { text, isSent: true }]);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border border-gray-400 rounded-lg shadow-lg">
      <Chat messages={messages} />
      <Input onSendMessage={sendMessage} />
    </div>
  );
}

export default App;
