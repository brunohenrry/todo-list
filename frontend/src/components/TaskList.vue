<template>
  <div class="task-list">
    <div v-if="tasks.length === 0" class="empty-state">
      <p>Nenhuma tarefa encontrada</p>
      <small>Clique no botão abaixo para adicionar</small>
    </div>

    <div v-else>
      <div
        v-for="task in tasks"
        :key="task.id"
        class="task-item"
        :class="{ completed: task.completed }"
      >
        <div class="task-checkbox">
          <input
            type="checkbox"
            :checked="task.completed"
            @change="toggleComplete(task)"
          />
        </div>

        <div class="task-content">
          <h3 :class="{ strikethrough: task.completed }">{{ task.title }}</h3>
          <p v-if="task.description" :class="{ strikethrough: task.completed }">
            {{ task.description }}
          </p>
        </div>

        <div class="task-actions">
          <button @click="editTask(task)" class="edit-btn">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                stroke="#64748B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z"
                stroke="#64748B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button @click="deleteTask(task.id)" class="delete-btn">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6H5H21"
                stroke="#EF4444"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                stroke="#EF4444"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 11V17"
                stroke="#EF4444"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 11V17"
                stroke="#EF4444"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toggleComplete(task) {
      this.$emit("toggle-complete", task);
    },
    editTask(task) {
      this.$emit("edit-task", task);
    },
    deleteTask(id) {
      this.$emit("delete-task", id);
    },
  },
};
</script>

<style scoped>
.task-list {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.empty-state {
  text-align: center;
  padding: 2rem 1rem;
  border-radius: 0.5rem;
  background-color: #f8fafc;
}

.empty-state p {
  color: #334155;
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.empty-state small {
  color: #64748b;
  font-size: 0.875rem;
}

.task-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease;
  margin-bottom: 8px;
}

.task-item:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.task-item.completed {
  background-color: #f8fafc;
}

.task-checkbox {
  display: flex;
  align-items: center; /* Centraliza o checkbox verticalmente */
  height: 100%; /* Ocupa toda a altura do task-item */
}

.task-checkbox input[type="checkbox"] {
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 0.25rem;
  border: 1px solid #cbd5e1;
  accent-color: #3b82f6;
  cursor: pointer;
  margin: 0;
}

.task-content {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza o conteúdo verticalmente */
  flex-grow: 1;
}

.task-content h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  color: #1e293b;
}

.task-content p {
  margin: 0.25rem 0 0 0;
  font-size: 0.875rem;
  color: #64748b;
}

.strikethrough {
  text-decoration: line-through;
  color: #94a3b8 !important;
}

.task-actions {
  display: flex;
  gap: 0.5rem;
}

.task-actions button {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.task-actions button:hover {
  background-color: #f1f5f9;
}

.task-actions .delete-btn:hover {
  background-color: #fee2e2;
}
</style>
