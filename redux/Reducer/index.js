import produce from "immer";
import { ADD_TASK, DELETE_TASK, CANCEL_TASK } from "../Action/types";
const InitialTask = {
  taskList: []
};

const taskReducer = (state = InitialTask, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, taskList: [...state.taskList, action.payload] };

    case CANCEL_TASK:
      return {
        ...state,
        taskList: [
          ...state.taskList,
          (state.taskList[action.index].isCancel = true)
        ]
      };
    case DELETE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter(item => item.key !== action.key)
      };

    default:
      return state;
  }
};

export default taskReducer;
