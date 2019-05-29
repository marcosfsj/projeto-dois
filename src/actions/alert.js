import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (alertType, msg, timeout = 4000) => dispatch => {
	const id = uuid.v4();
	dispatch({
		type: SET_ALERT,
		payload: {
			id,
			alertType,
			msg
		}
	});

	setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
}
