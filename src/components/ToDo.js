import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const ToDo = ({ text, updateMode, deleteToDo, completed, toggleComplete }) => {
  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={completed}
        onChange={toggleComplete}
        className="checkbox"
      />
      <span
        className="text"
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {text}
      </span>
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;

// import React from "react";
// import { BiEdit } from "react-icons/bi";
// import { AiFillDelete } from "react-icons/ai";

// const ToDo = ({ text, updateMode, deleteToDo, completed, toggleComplete }) => {
//   return (
//     <div className="todo">
//       <div
//         className="text"
//         style={{ textDecoration: completed ? "line-through" : "none" }}
//       >
//         {text}
//       </div>
//       <div className="icons">
//         <BiEdit className="icon" onClick={updateMode} />
//         <AiFillDelete className="icon" onClick={deleteToDo} />
//       </div>
//     </div>
//   );
// };

// export default ToDo;

// import React from "react";
// import { BiEdit } from "react-icons/bi";
// import { AiFillDelete } from "react-icons/ai";

// const ToDo = ({ text, updateMode, deleteToDo }) => {
//   return (
//     <div className="todo">
//       <div className="text">{text}</div>
//       <div className="icons">
//         <BiEdit className="icon" onClick={updateMode} />
//         <AiFillDelete className="icon" onClick={deleteToDo} />
//       </div>
//     </div>
//   );
// };

// export default ToDo;
