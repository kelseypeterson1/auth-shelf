const shelf = (state = [], action) => {

    switch (action.type) {
        case 'SET_SHELF_ITEMS':
            console.log('in reducer', action.type);
            console.log('reducer sending', action.payload);
            return [...state, action.payload];
        default:
            return state;
    }
  }

  export default shelf;