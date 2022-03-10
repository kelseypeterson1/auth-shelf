import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { takeEvery} from 'redux-saga/effects';

// worker Saga: will be fired on "ADD_ITEM"
function* setItem(action) {
try { 
    console.log('in saga, item sent is', action.payload)
    yield axios.post(`/api/shelf`, action.payload);
    yield put({ type: 'SET_SHELF_ITEMS' })

} catch (err) {
    console.log('POST error is', err);
}}

function* addItem() {
    yield takeEvery('ADD_ITEM', setItem)
}

export default addItem;