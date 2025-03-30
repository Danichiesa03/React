export default function Input({ onSendMessage }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="flex mt-2">
      <input
        type="text"
        className="flex-1 p-2 border border-gray-400 rounded-l-md"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button
        onClick={handleSend}
        className="p-2 bg-blue-500 text-white rounded-r-md"
      >
        Send
      </button>
    </div>
  );
}
