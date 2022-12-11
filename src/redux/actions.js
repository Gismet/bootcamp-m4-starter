export default function addToListAction(_title, _year, _id) {
    return {
        type: "ADD_TO_LIST",
        payload: {
            title: _title,
            year: _year,
            id: _id
        }
    }
}

// an action creator to remove an item from the list 
export function removeItemFromList(_id) {
    return {
        type: "DEL_ITEM",
        payload: {
            itemId: _id
        }

    }
}

// an action creator to clear up the global state

export function clearList() {
    return {
        type: "CLEAR_LIST"
    }
}