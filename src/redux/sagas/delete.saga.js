import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* deleteItem(action) {
    const id = action.payload;
    console.log('id', id);
    
    yield axios.delete(`/api/shelf/${id}`);
    yield put({type: 'FETCH_SHELF_ITEMS'});
}

function* deleteItemSaga() {
    yield takeEvery('DELETE_ITEM', deleteItem);
}

export default deleteItemSaga;