<template>
  <div class="task-form">
    <h2>{{ editing ? "Editar Tarefa" : "Nova Tarefa" }}</h2>

    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label>Título</label>
        <input
          type="text"
          v-model="form.title"
          required
          placeholder="Digite o título"
        />
      </div>

      <div class="form-group">
        <label>Descrição (Opcional)</label>
        <textarea
          v-model="form.description"
          placeholder="Digite uma descrição"
          rows="3"
        ></textarea>
      </div>

      <div class="form-actions">
        <button type="button" @click="cancel" class="cancel-btn">
          Cancelar
        </button>
        <button type="submit" class="submit-btn">
          {{ editing ? "Atualizar" : "Adicionar" }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      form: {
        title: "",
        description: "",
      },
      editing: false,
    };
  },
  watch: {
    task: {
      immediate: true,
      handler(newTask) {
        if (newTask) {
          this.editing = true;
          this.form = {
            title: newTask.title,
            description: newTask.description,
          };
        } else {
          this.editing = false;
          this.form = {
            title: "",
            description: "",
          };
        }
      },
    },
  },
  methods: {
    handleSubmit() {
      this.$emit("submit", this.form);
      this.resetForm();
    },
    cancel() {
      this.$emit("cancel");
      this.resetForm();
    },
    resetForm() {
      this.form = {
        title: "",
        description: "",
      };
      this.editing = false;
    },
  },
};
</script>

<style scoped>
.task-form {
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  margin-bottom: 1.5rem;
}

.task-form h2 {
  margin: 0 0 1.25rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #334155;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.625rem 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  transition: border-color 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #93c5fd;
  box-shadow: 0 0 0 3px rgba(147, 197, 253, 0.5);
}

.form-group textarea {
  min-height: 5rem;
  resize: vertical;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.form-actions button {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cancel-btn {
  border: 1px solid #e2e8f0;
  background-color: white;
  color: #64748b;
}

.cancel-btn:hover {
  background-color: #f8fafc;
}

.submit-btn {
  border: none;
  background-color: #3b82f6;
  color: white;
}

.submit-btn:hover {
  background-color: #2563eb;
}
</style>
