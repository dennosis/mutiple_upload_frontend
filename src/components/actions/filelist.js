
export function loadImages(data) {
    return dispatch => {
            dispatch(success(data))
    }


    function success(data) { return { type: 'LOAD_SUCCESS', data } }
    //function failure(error) { return { type: 'LOAD_FAILURE', error} }
}
