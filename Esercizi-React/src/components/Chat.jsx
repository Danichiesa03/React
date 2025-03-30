import Message from "./Message";
export default function Chat({ messages }) {
  return (
    <div className="flex flex-col p-4 space-y-2 overflow-auto h-80 border border-gray-400 rounded-md">
      {messages.map((msg, index) => (
        <Message key={index} text={msg.text} isSent={msg.isSent} />
      ))}
    </div>
  );
}
