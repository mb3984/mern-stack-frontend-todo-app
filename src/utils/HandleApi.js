import axios from "axios";

const baseUrl = "https://mern-stack-backend-todo-app.onrender.com";

const getAllToDo = (setToDo, setIsLoading) => {
  setIsLoading(true); // Show loader when the request starts
  axios
    .get(baseUrl)
    .then(({ data }) => {
      setToDo(data); // No need to modify this, as the backend now sends completed status
      setIsLoading(false); // Hide loader when the request finishes
    })
    .catch((error) => {
      console.log(error);
      setIsLoading(false); // Hide loader if there's an error
    });
};

const addToDo = (text, completed, setText, setTodo, setIsLoading) => {
  setIsLoading(true); // Show loader
  axios
    .post(`${baseUrl}/save`, { text, completed })
    .then(() => {
      alert("Todo Added Successfully");
      getAllToDo(setTodo, setIsLoading);
      setText("");
    })
    .catch((error) => {
      console.log(error);
      setIsLoading(false); // Hide loader if there's an error
    });
};

const updateToDo = (
  toDoId,
  text,
  completed,
  setTodo,
  setText,
  setIsUpdating,
  setIsLoading
) => {
  setIsLoading(true); // Show loader
  axios
    .put(`${baseUrl}/update`, { _id: toDoId, text, completed })
    .then(() => {
      alert("Todo Updated Successfully");
      getAllToDo(setTodo, setIsLoading);
      setText("");
      setIsUpdating(false);
    })
    .catch((error) => {
      console.log(error);
      setIsLoading(false); // Hide loader if there's an error
    });
};

const deleteToDo = (_id, setTodo, setIsLoading) => {
  setIsLoading(true); // Show loader
  axios
    .delete(`${baseUrl}/delete/${_id}`)
    .then(() => {
      alert("Todo Deleted Successfully");
      getAllToDo(setTodo, setIsLoading);
    })
    .catch((error) => {
      console.log(error);
      setIsLoading(false); // Hide loader if there's an error
    });
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
