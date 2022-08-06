import { Table } from "react-bootstrap";
import { PropagateLoader } from "react-spinners";
import styled from "styled-components";
import {
  useAddTodoMutation,
  useDeleteTodoMutation,
  useGetTodosQuery,
  useUpdateTodoMutation,
} from "../Api/ApiSlice";
import NavigationBar from "./NavBar";
import { FaTrashAlt, FaUpload } from "react-icons/fa";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
const TodoContainer = styled.main`
  width: 90%;
  margin: auto;

  form{
    width: 100%;
    display: flex;
    gap: .5rem;
    margin: 3rem 0;
    justify-content: flex-end;
    input{
        width: 60%;
        outline: none;
        border-radius: 12px;
        border: 2px solid lightblue;
        padding: 5px;
        
        &:focus{
          box-shadow: 2px 2px 5px lightblue,-2px -2px 15px lightblue; 
          border: none;
        }
    }
  }

  @media screen and (min-width: 900px){
    width: 70%
  }
`;

function Todolist() {
  const { data, isLoading, isSuccess, isError, error } = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  //   Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault() //This prevent default behavior of page loading onSubmit
    addTodo({title: newTodo, done: false})
    setNewTodo("")

    // Clearing fields after form submission
    event.target.reset()
    
  };

  

  const [newTodo, setNewTodo] = useState("");
  return (
    <div>
      <NavigationBar />
      <TodoContainer>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter new todo"
            onChange={(event) => setNewTodo(event.target.value)  }

          />
          <Button variant="dark" size="sm" type="submit" onClick={(e) => e.target.reset()} >Add Todo <FaUpload /></Button>

        </form>
        {isLoading && <PropagateLoader color="orangered" />}
        {isError && <p>{error.message}</p>}
        <Table striped bordered hover>
          <thead style={{ backgroundColor: "#333", color: "white" }}>
            <tr>
              <th></th>
              <th>Todo</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {isSuccess &&
              data &&
              data.map((todoItem) => (
                <tr key={todoItem.id}>
                  <td>
                    <input
                      type="checkbox"
                      name="done"
                      id={todoItem.id}
                      checked={todoItem.done}
                      onChange = {()=>updateTodo({...todoItem, done: !todoItem.done})}
                    />
                  </td>
                  <td>
                    <label htmlFor={todoItem.id}>{todoItem.title}</label>
                  </td>
                  <td>
                    <FaTrashAlt onClick={() => deleteTodo({id: todoItem.id})} />
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </TodoContainer>
    </div>
  );
}

export default Todolist;
