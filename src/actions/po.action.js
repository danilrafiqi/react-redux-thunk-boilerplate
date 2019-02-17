import { FETCH, DELETE, GET_ONE } from './constant';

const fetchAll = () => dispatch => {
  console.log('action runn');
  fetch(`http://localhost:2018/po`)
    .then(res => res.json())
    .then(po =>
      dispatch({
        type: FETCH,
        payload: po
      })
    );
};

const getOne = id => dispatch => {
  fetch(`http://localhost:2018/po/${id}`)
    .then(res => res.json())
    .then(po => {
      dispatch({
        type: GET_ONE,
        payload: po
      });
    });
};

const deleteOne = id => dispatch => {
  console.log('delete');
  fetch(`http://localhost:2018/po/${id}`, {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' }
  })
    .then(res => res.json())
    .then(po => {
      console.log('dfghj', po);
      dispatch(fetchAll());
    });
};

export { fetchAll, deleteOne, getOne };
