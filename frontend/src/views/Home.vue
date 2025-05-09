<template>
  <div class="home-container">
    <div class="home-content">
      <h1>Minhas Tarefas</h1>

      <TaskForm
        v-if="showForm"
        :task="taskToEdit"
        @submit="handleFormSubmit"
        @cancel="toggleForm"
      />

      <button v-else @click="toggleForm" class="add-button">
        <span>+</span> Adicionar Tarefa
      </button>

      <TaskList
        :tasks="tasks"
        @toggle-complete="toggleTaskComplete"
        @edit-task="editTask"
        @delete-task="deleteTask"
      />
    </div>
  </div>
</template>

<script>
import TaskForm from "@/components/TaskForm.vue";
import TaskList from "@/components/TaskList.vue";
import api from "@/services/api";

export default {
  name: "Home",
  components: {
    TaskForm,
    TaskList,
  },
  data() {
    return {
      tasks: [],
      showForm: false,
      taskToEdit: null,
    };
  },
  created() {
    this.fetchTasks();
  },
  methods: {
    async fetchTasks() {
      try {
        const response = await api.getAllTasks();
        this.tasks = response.data;
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    },
    toggleForm() {
      this.showForm = !this.showForm;
      if (!this.showForm) {
        this.taskToEdit = null;
      }
    },
    editTask(task) {
      this.taskToEdit = task;
      this.showForm = true;
    },
    async handleFormSubmit(taskData) {
      try {
        if (this.taskToEdit) {
          await api.updateTask(this.taskToEdit.id, taskData);
        } else {
          await api.createTask(taskData);
        }
        this.fetchTasks();
        this.toggleForm();
      } catch (error) {
        console.error("Error saving task:", error);
      }
    },
    async toggleTaskComplete(task) {
      try {
        await api.updateTask(task.id, {
          ...task,
          completed: !task.completed,
        });
        this.fetchTasks();
      } catch (error) {
        console.error("Error updating task:", error);
      }
    },
    async deleteTask(id) {
      try {
        if (confirm("Tem certeza que deseja excluir esta tarefa?")) {
          await api.deleteTask(id);
          this.fetchTasks();
        }
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    },
  },
};
</script>

<style>
.home-container {
  max-width: 600px;
  width: 100%;
  margin: 0 auto; 
  padding: 2rem 1rem; 
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box; 
}

.home-content {
  width: 100%;
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  margin: auto; 
}

.home-content h1 {
  margin: 0 0 1.5rem 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  text-align: center;
}

.add-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem 1rem;
  margin-bottom: 1.5rem;
  border: none;
  border-radius: 0.375rem;
  background-color: #3b82f6;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.add-button:hover {
  background-color: #2563eb;
}

.add-button span {
  font-size: 1.25rem;
  line-height: 1;
}
</style>
