import { ACTIONS } from "./actionsTypes";

export const addColumn = (title) => {
  return {
    type: ACTIONS.ADD_Column,
    payload: title,
  };
};

export const addCard = (content, listID) => {
  return {
    type: ACTIONS.ADD_CARD,
    payload: { content, listID },
  };
};
