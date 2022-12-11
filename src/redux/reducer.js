const initialState = {
    searchLine: '',
    movies: [],
    lists: []
}

const reducer = (state = initialState, action) => {
    if (action.type === "ADD_TO_LIST") {
        if (!state.lists.some((item) => item.name === action.payload.title)) {
            state.lists.push({ name: action.payload.title, year: action.payload.year, id: action.payload.id });
        }
        console.log("here is the list")
        console.log(state.lists);
    } else if (action.type === "DEL_ITEM") {
        console.log("removing item works");
        const clone = state.lists.filter(item => item.id !== action.payload.itemId);
        state.lists = clone;
    } else if (action.type === "CLEAR_LIST") {
        console.log("clearing list works");
        state.lists = [];
    }
    return state;
}

export default reducer;
