import { ACTIONS } from "../actions/actionsTypes";

export const initState = [
  {
    title: "List Nr.1",
    id: `list-${0}`,
    cards: [
      { id: `card-${0}`, content: "create react-app" },
      { id: `card-${1}`, content: "install needed packages for the project" },
      {
        id: `card-${2}`,
        content: "react-dom, react-redux, bootstrap, node-sass",
      },
    ],
  },
  {
    title: "List Nr.2",
    id: `list-${1}`,
    cards: [
      { id: `card-${3}`, content: "create web components" },
      { id: `card-${4}`, content: "connect component to redux store " },
      { id: `card-${5}`, content: "add/remove functionality " },
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
        id: `list-${Date.now()}`,
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
      } = action.payload;
      const DropState = [...state];
      //drag and drop in the same column
      if (droppableIdStart === droppableIdEnd) {
        const col = state.find((list) => droppableIdStart === list.id);
        console.log(col);
        const card = col.cards.splice(droppableIndexStart, 1);
        col.cards.splice(droppableIndexEnd, 0, ...card);
      }
      //drag and drop cards between columns
      if (droppableIdStart !== droppableIdEnd) {
        const listStart = state.find((list) => droppableIdStart === list.id);
        const card = listStart.cards.splice(droppableIndexStart, 1);
        const listEnd = state.find((list) => droppableIdEnd === list.id);
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }
      return DropState;
    default:
      return state;
  }
};
export default listsReducer;
