export const LOAD_DATA = 'LOAD_DATA';
export const LOAD_FAIL = 'LOAD_FAIL'

const URL = 'https://picsum.photos/list'

export function loadPicturesAction(offset, limit, callback) {
  return (dispatch) => {
    fetch(URL)
      .then(res => res.json())
      .then((res) => {
        const resSliced = res.slice(offset, limit)
        const resNew = resSliced.map( item => ({
          source: {
            uri: `https://picsum.photos/400/300/?image=${item.id}`,
          },
          author: item.author,
        }))
        console.log(resNew)
        dispatch({
          type: LOAD_DATA,
          payload: resNew
        });
        callback();
      })
      .catch((err) => dispatch({ type: LOAD_FAIL, payload: { err }}))
  };
}
