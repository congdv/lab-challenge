import React, { useState, Fragment } from 'react';
import { Popup } from 'react-map-gl';
import LabTag from '../LabTag';
const LabPopup = ({ lab, isShow }) => {
    const [isShowPopup, setIsShowPopup] = useState(isShow);

    return (
        <Fragment>
            {isShowPopup && (
                <Popup
                    latitude={lab.latitude}
                    longitude={lab.longitude}
                    closeButton={true}
                    closeOnClick={false}
                    onClose={() => {
                        setIsShowPopup(false);
                    }}
                    anchor="top-left"
                    offsetTop={10}
                    offsetLeft={10}
                >
                    <LabTag lab={lab} />
                </Popup>
            )}
        </Fragment>
    );
};

export default LabPopup;
