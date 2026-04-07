import { useState } from "react";

function TaskInput({ addTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    addTask(input);
    setInput("");
  };

  return (
    <div className="task-input-group">
      <input
        className="task-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        placeholder="Enter task..."
      />
      <button className="task-add-btn" onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default TaskInput;