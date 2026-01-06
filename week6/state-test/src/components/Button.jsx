function Button({ handler, text }) {
  return (
    <button
      text={text}
      onClick={handler}
      className="text-red-800 m-1 border-2 border-gray-500"
    >
      {text}
    </button>
  );
}

export default Button;
