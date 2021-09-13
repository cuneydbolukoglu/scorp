import { USER_UPDATE, USER_DELETE, LANG_UPDATE } from '../action-types';
import { store } from "../../redux";

export const userUpdate = user => {
    store.dispatch({ type: USER_UPDATE, user: user })
}

export const userDelete = () => {
    store.dispatch({ type: USER_DELETE })
}

export const langUpdate = lang => {
    store.dispatch({ type: LANG_UPDATE, lang: lang })
}