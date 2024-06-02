"use client"

import CreateTodo from "@/components/CreateTodo";
import { useSelector } from "react-redux";

export default function Home() {
  const data = useSelector((store) => store.todoSlice.todos)
  console.log("data", data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>List of Todos</h1>
      <CreateTodo />

      <table>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Completed</th>
        </tr>
        {
          data?.map((todo) => {
            return(
            <tr>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>{todo.isComplete  ? "Yes" : "No"}</td>
            </tr>
            )
          })
        }

      </table>

    </main>
  );
}
