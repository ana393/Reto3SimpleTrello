import { ACTIONS } from "./actionsTypes";

export const removeCard = (listID, id) => {
  console.log("cardID:", id);
  return {
    type: ACTIONS.REMOVE_CARD,
    payload: { listID, id },
  };
};
