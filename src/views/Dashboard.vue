<template>
  <div id="app">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col col-md-6">
          <div class="card">
            <div class="card-header">
              <h1>Tareas</h1>
              <form class="card-body input-group" @submit.prevent="add(todo)">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Añadir tarea"
                  v-model="todo"
                />
                <span class="input-group-btn">
                  <button
                    class="btn btn-primary"
                    type="submit"
                    :disabled="!todoIsValid"
                  >
                    Añadir
                  </button>
                </span>
              </form>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item" v-for="todo in todos" v-bind:key="todo">
              <div class="d-flex" v-if="!todo.isEdited">
                <div class="p-2">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      v-model="todo.finished"
                    />
                    <label class="form-check-label">
                      <span :class="{ 'todo-finished': todo.finished }">
                        {{ todo.content }}
                      </span>
                    </label>
                  </div>
                </div>
                <div class="ml-auto p-2">
                  <button
                    class="btn btn-sm btn-primary"
                    @click="edit(todo)"
                    v-show="!isBeingEdited"
                  >
                    <i class="fa fa-edit"></i>
                  </button>
                </div>
              </div>
              <form v-else class="m-0" @submit.prevent="update(todo)">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="Editar"
                    v-model="editTodo"
                  />
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      class="btn btn-outline-primary"
                      type="submit"
                      :disabled="!editTodoIsValid"
                    >
                      <i class="fa fa-save"></i>
                    </button>
                    <button
                      class="btn btn-outline-danger"
                      @click="remove(todo)"
                    >
                      <i class="fa fa-trash"></i>
                    </button>
                  </div>
                </div>
              </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      todo: null,
      todos: [],
      editTodo: null,
    }
  },

  name: 'Todolist',

  methods: {
    add(todo) {
      if (!this.todoIsValid) {
        return;
      }
      this.todos.push({ content: todo, finished: false, isEdited: false });
      this.todo = null;
    },
    remove(todo) {
      this.todos = this.todos.filter((item) => {
        return item != todo;
      });
    },
    edit(todo) {
      this.editTodo = todo.content;
      todo.isEdited = true;
    },
    update(todo) {
      if (!this.editTodoIsValid) {
        return;
      }
      todo.content = this.editTodo;
      todo.isEdited = false;
    },
  },

  computed: {
    todoIsValid() {
      return !!this.todo;
    },
    editTodoIsValid() {
      return !!this.editTodo;
    },
    isBeingEdited() {
      return this.todos.filter((todo) => todo.isEdited).length > 0;
    },
  },
};
</script>

<style>
@import url(https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css);
@import url(https://use.fontawesome.com/releases/v5.0.13/css/all.css);

.card-header h1{
    font-size: 45px;
    margin: 15px;
    font-family: 'Nunito', sans-serif;
}

.card{
    margin-top: 20px;
    border-radius: 15px;
}

.todo-finished {
    text-decoration: line-through;
    color: grey;
}

.list-group-item{
    background-color: lightblue;
    margin: 9px;
}
</style>
