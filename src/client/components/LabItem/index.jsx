import React from 'react';
import { useDispatch } from 'react-redux';
import ClickableItem from './Styles';
import { mapConstants } from '../../constants';

const LabItem = ({ lab }) => {
    const dispatch = useDispatch();
    const handleOnClick = event => {
        event.preventDefault();
        //Relocating map
        const viewport = {
            latitude: lab.latitude,
            longitude: lab.longitude,
            zoom: 15,
        };
        dispatch({ type: mapConstants.LOCATING_SUCCESS, data: viewport });
    };
    return (
        <ClickableItem
            onClick={handleOnClick}
            className="list-group-item list-group-item-action"
        >
            {lab.title}
        </ClickableItem>
    );
};

export default LabItem;
