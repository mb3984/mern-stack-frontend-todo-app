import axios from "axios";

const baseUrl = "https://mern-stack-backend-todo-app.onrender.com";

const getAllToDo = (setToDo) => {
  axios.get(baseUrl).then(({ data }) => {
    setToDo(data.map((todo) => ({ ...todo, completed: false })));
  });
};

const addToDo = (text, setText, setTodo) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then(() => {
      alert("Todo Added Successfully");
      getAllToDo(setTodo);
      setText("");
    })
    .catch((error) => console.log(error));
};

const updateToDo = (toDoId, text, setTodo, setText, setIsUpdating) => {
  axios
    .put(`${baseUrl}/update`, { _id: toDoId, text })
    .then(() => {
      alert("Todo Updated Successfully");
      getAllToDo(setTodo);
      setText("");
      setIsUpdating(false);
    })
    .catch((error) => console.log(error));
};

const deleteToDo = (_id, setTodo) => {
  axios
    .delete(`${baseUrl}/delete/${_id}`)
    .then(() => {
      alert("Todo Deleted Successfully");
      getAllToDo(setTodo);
    })
    .catch((error) => console.log(error));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
