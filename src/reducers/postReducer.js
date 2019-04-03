const postReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_POST':
            return state.concat([action.data]);
        case 'DELETE_POST':
            return state.filter((post) => post.id !== action.id);
        case 'GET_THOUGHTS':
            return { data: action.id }
        default:
            return state;
    }
}

export default postReducer;