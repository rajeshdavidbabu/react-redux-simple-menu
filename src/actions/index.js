export function selectBook(book) {
    // This is an action creator and it should return type and payload. The payload is passed on
    // to the reducer to update the global state. Reducer is combined to build the global state.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
    // console.log("The action is called ", book.title)
}