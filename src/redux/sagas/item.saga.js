import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// saga generator to handle axios GET all items
function* fetchItems() {

}

// saga generator to handle axios POST
function* addItem(action) {

}

// saga generator to handle axios DELETE by
// item id
function* deleteItem(action) {
  
}

// this generator listens for all the saga commands
function* itemSaga() {
    yield takeLatest('FETCH_ITEMS', fetchItems);
    yield takeLatest('POST_ITEMS', addItem);
    yield takeLatest('REMOVE_ITEMS', deleteItem);
}

// export listeners to the root
export default itemSaga;