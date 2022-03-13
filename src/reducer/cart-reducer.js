const initialState = {
    items: []
};

const cartReducer = (state=initialState, action)=> {
    switch(action.type) {
        case "ADDTOCART":
            const newItem = [...state.items];
            newItem.push(action.value)
            return {...state, items: newItem}
        case "DELETEFROMCART":
            const oldItems = [...state.item];
            const updatedItems = oldItems.filter((item)=> {
                return item.id !== action.value.id
            });
        default: 
        return state;
    }
}