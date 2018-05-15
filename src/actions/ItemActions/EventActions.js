import {
    EVENT_UPDATED,
    EVENT_FETCH_SUCCESS,
    EVENT_CREATE
} from "../types";
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const eventUpdated = ({ prop, value}) => {
  return {
      type: EVENT_UPDATED,
      payload: { prop, value}
  };
};

export const eventCreate = ({ eventName, quantity, retailPrice, resellPrice, section, row, seat, otherInfo, eventDate, sellDate}) => {

    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/events`)
            .push({
                eventName,
                quantity,
                retailPrice,
                resellPrice,
                section,
                row,
                seat,
                otherInfo,
                eventDate,
                sellDate
            })
            .then( () => {
                dispatch({ type: EVENT_CREATE });
                Actions.event_inventory();
            });
    };
};

export const fetchEvents = () => {

    const { currentUser } = firebase.auth();

    return ( dispatch ) => {
        firebase.database().ref(`users/${currentUser.uid}/events`)
            .on( 'value', snapshot => {
                dispatch({ type: EVENT_FETCH_SUCCESS, payload: snapshot.val() })
            });
    };
};