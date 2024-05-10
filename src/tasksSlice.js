
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialTasks = [
{ id: 1, title: 'Task 1', completed: false },
{ id: 2, title: 'Task 2', completed: true },
{ id: 3, title: 'Task 3', completed: false }
];

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {

await new Promise(resolve => setTimeout(resolve, 1000));
return initialTasks;
});

const tasksSlice = createSlice({
name: 'tasks',
initialState: {
    tasks: [],
    status: 'idle',
    error: null
},
reducers: {

    addTask: (state, action) => {
    state.tasks.push(action.payload);
    },

    removeTask: (state, action) => {
    state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },

    toggleTask: (state, action) => {
    const task = state.tasks.find(task => task.id === action.payload);
    if (task) {
        task.completed = !task.completed;
    }
    }
},
extraReducers: builder => {
    builder
    .addCase(fetchTasks.pending, state => {
        state.status = 'loading';
    })
    .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'idle';
        state.tasks = action.payload;
    })
    .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
    });
}
});

export const { addTask, removeTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;
