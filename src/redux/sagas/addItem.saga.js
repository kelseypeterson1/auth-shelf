import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { takeEvery} from 'redux-saga/effects';

// // ========multer stuff===============



// worker Saga: will be fired on "ADD_ITEM"
function* setItem(action) {
    const headers = {
        'content-type': 'mulitpart/form-data'
    }
    const imageForm = new FormData();
    imageForm.append('image', action.payload.imageUrl);
    imageForm.append('description', action.payload.description)
    console.log('image url is', action.payload.imageUrl.name);

try { 
    console.log('headers is', headers);
    console.log('image form is', imageForm);
    const response = yield axios({
        method: 'POST',
        url: '/api/shelf',
        headers: headers,
        data: imageForm,
      })
    // yield axios.post(`/api/shelf`, action.payload);
    yield put({ type: 'FETCH_SHELF_ITEMS' })
} catch (error) {
    console.log('POST error is', error);
}}

function* addItem() {
    yield takeLatest('ADD_ITEM', setItem);
}

export default addItem;