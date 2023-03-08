const Button = ({ show, onShow }) => {
  return (
    <div className="taskbar-btn-container">
      <button onClick={() => onShow(!show)}>
        {show ? "Close Add Task Bar" : "Show Add Task Bar"}
      </button>
    </div>
  );
};

export default Button;
