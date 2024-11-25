import ToDo from "./components/ToDo";
import { useState, useEffect } from "react";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleApi";
import { ThreeDots } from "react-loader-spinner"; // Correct import for loader

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");
  const [searchText, setSearchText] = useState(""); // New state for search text
  const [isLoading, setIsLoading] = useState(false); // Loading state

  useEffect(() => {
    getAllToDo(setToDo, setIsLoading); // Fetch todos and manage loading state
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  // Filtered to-do list based on search text
  const filteredToDo = toDo.filter((item) =>
    item.text.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderLoadingView = () => (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <ThreeDots color="#8e44ad" height={50} width={50} />
    </div>
  );

  return (
    <div className="app">
      <div className="container">
        <h1>Todo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add ToDos..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isUpdating
                ? () =>
                    updateToDo(
                      toDoId,
                      text,
                      setToDo,
                      setText,
                      setIsUpdating,
                      setIsLoading
                    )
                : () => addToDo(text, setText, setToDo, setIsLoading)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="top">
          <input
            type="text"
            placeholder="Search ToDos..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        {isLoading && renderLoadingView()}{" "}
        {/* Display loader if isLoading is true */}
        <div className="list">
          {filteredToDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              completed={item.completed}
              toggleComplete={() => {
                setToDo((prev) =>
                  prev.map((todo) =>
                    todo._id === item._id
                      ? { ...todo, completed: !todo.completed }
                      : todo
                  )
                );
              }}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={() => deleteToDo(item._id, setToDo, setIsLoading)} // Pass setIsLoading to delete
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
