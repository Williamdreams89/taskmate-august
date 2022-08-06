import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000" }),
  tagTypes: ["Todolist"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todo_api/",
      providesTags: ["Todolist"],
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: "/todo_api/add_new_task/",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todolist"],
    }),
    updateTodo: builder.mutation({
      query: (todo) => ({
        url: `/todo_api/edit_task/${todo.id}/`,
        method: "PATCH",
        body: todo,
      }),
      invalidatesTags : ['Todolist']
    }),

    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/todo_api/remove_task/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Todolist"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = ApiSlice;
