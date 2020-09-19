import { ACTIONS } from "../actions/actionsTypes";

export const initState = [
  {
    title: "List Nr.1",
    id: 0,
    cards: [
      { id: "1", content: "create react-app" },
      { id: "2", content: "install needed packages for the project" },
      { id: "3", content: "react-dom, react-redux, bootstrap, node-sass" },
    ],
  },
  {
    title: "List Nr.2",
    id: 1,
    cards: [
      { id: "4", content: "create web components" },
      { id: "5", content: "connect component to redux store " },
      { id: "6", content: "add/remove functionality " },
    ],
  },
];
const listsReducer = (state = initState, action) => {
  console.log("reducer action: ", action, state);
  switch (action.type) {
    case ACTIONS.ADD_Column:
      const List = {
        title: action.payload,
        cards: [],
        id: Date.now(),
      };
      return [...state, List];

    case ACTIONS.ADD_CARD:
      const newCard = {
        id: Date.now(),
        content: action.payload.content,
      };
      const newState = state.map((list) => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });
      return newState;

    case ACTIONS.REMOVE_CARD:
      const removeCardState = state.map((list) => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: list.cards.filter((card) => card.id !== action.payload.id),
          };
        } else {
          return list;
        }
      });
      return removeCardState;

    case ACTIONS.DRAGGED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
      } = action.payload;
      const DropState = [...state];
      //drag and drop in the same column
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find((list) => droppableIdStart);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }
      return DropState;
    default:
      return state;
  }
};
export default listsReducer;
