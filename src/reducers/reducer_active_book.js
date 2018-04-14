// State here resembles a piece of state that the reducer uses to build the global state.
export default function(state = null, action) {
    // When the app loads this would check for the state, which is undefined, so set it to null in the argument.
    switch(action.type){
        case 'BOOK_SELECTED':
         return action.payload;
    }
    
    return state
}