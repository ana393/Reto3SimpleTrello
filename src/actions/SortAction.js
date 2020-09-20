import { ACTIONS } from "./actionsTypes";

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  type
) => {
  return {
    type: ACTIONS.DRAGGED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      type,
    },
  };
};
