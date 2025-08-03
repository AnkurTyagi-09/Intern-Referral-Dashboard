function Button({ onClick, text }) {
  return (
    <button
      onClick={onClick}
      className="gradient-bg p-3 rounded-lg w-full font-semibold hover:opacity-90 transition-opacity duration-300"
    >
      {text}
    </button>
  );
}

export default Button;