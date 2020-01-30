import { ADD_TASK, DELETE_TASK, CANCEL_TASK } from "./types";

const addTask = task => ({
  type: ADD_TASK,
  payload: task
});

const deleteTask = key => ({
  type: DELETE_TASK,
  key
});
const cancelTask = index => ({
  type: CANCEL_TASK,
  index
});

export const addTaskAction = task => async dispatch => {
  try {
    dispatch(addTask(task));
  } catch (error) {
    console.log(error);
  }
};

export const deleteTaskAction = key => async dispatch => {
  try {
    dispatch(deleteTask(key));
  } catch (error) {
    console.log(error);
  }
};
export const cancelTaskAction = index => async dispatch => {
  try {
    dispatch(cancelTask(index));
  } catch (error) {
    console.log(error);
  }
};
