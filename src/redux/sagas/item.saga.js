import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// saga generator to handle axios GET all items
function* fetchItems() {
  try {
    const response = yield axios.get(`/api/shelf`)
    console.log(`Server says... ${response}`)
    yield put({ type: "SET_ITEMS", payload: response.data })
  } catch (error) {
    console.log(`Failed GET request ${error}`)
  }
}

// saga generator to handle axios POST
function* addItem(action) {

  // try wrapper handles no error path
  try {

    // run axios POST with a body of the form object
    yield axios.post(`/api/shelf`, action.payload);

    // dispatch to our reducer to re-run the GET
    yield put({ type: 'FETCH_ITEMS' });

    // catch for error
  } catch (error) {
    console.log('Error in add item generator', error)
  };
}

// saga generator to handle axios DELETE by
// item id
function* deleteItem(action) {
  console.log('Action is:', action.payload);
  let data = action.payload

  try {

    yield axios.delete(`/api/shelf/${action.payload.id}/${action.payload.user_id}`, data);

    yield put({
      type: 'FETCH_ITEMS'
    });

  } catch (error) {
    console.log('Error in delete item generator', error);

  };

};

// this generator listens for all the saga commands
function* itemSaga() {
  yield takeLatest('FETCH_ITEMS', fetchItems);
  yield takeLatest('POST_ITEMS', addItem);
  yield takeLatest('REMOVE_ITEMS', deleteItem);
}

// export listeners to the root
export default itemSaga;