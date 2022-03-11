import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { takeEvery} from 'redux-saga/effects';

function* fetchShelfItems() {

    try {
        const shelf = yield axios.get('/api/shelf')
        // console.log('get all:', shelf.data);
        yield put({ type: 'SET_SHELF_ITEMS', payload: shelf.data });
        // console.log('after reducer is called, still in saga');

    } catch {
        console.log('Get all error');


    }
}

function* shelfSaga() {
    yield takeLatest('FETCH_SHELF_ITEMS', fetchShelfItems)
}


export default shelfSaga;