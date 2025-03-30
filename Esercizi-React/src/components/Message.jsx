export default function Message({ text, isSent }) {
  return (
    <div
      className={`p-2 m-2 rounded-lg max-w-xs ${
        isSent
          ? "bg-blue-500 text-white self-end"
          : "bg-gray-300 text-black self-start"
      }`}
    >
      {text}
    </div>
  );
}
