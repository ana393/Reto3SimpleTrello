export const initState = [
  {
    title: "Lista Nr.1",
    id: 0,
    cards: [
      { id: "1", content: "dedicate more hours to coding" },
      { id: "2", content: "understand redux" },
      { id: "3", content: "conect UI component" },
    ],
  },
  {
    title: "Lista Nr.2",
    id: 1,
    cards: [
      { id: "1", content: "functional components" },
      { id: "2", content: "complex UI" },
    ],
  },
];
const listsReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default listsReducer;

/* const rootReducer = (state = initState, action) => {
  console.log("reducer action: ", action, state);
  switch (action.type) {
    case "ADD_CARD":
      return {
        ...state,
          cards: [...state.cards, { id: Date.now(), content: action.payload }],
        }

    case "REMOVE_CARD":
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload),
      };

    default:
      return state;
  }
}; 
export default rootReducer;*/
