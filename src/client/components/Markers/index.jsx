import React from 'react';
import { Marker } from 'react-map-gl';
import { connect } from 'react-redux';
import pin from './pin.svg';
import MarkerStyled from './Styles';

const Markers = ({ labs }) => {
    if (labs.loading) {
        return;
    }

    return labs.data.map(lab => (
        <Marker
            key={lab.id}
            latitude={lab.latitude}
            longitude={lab.longitude}
            offsetLeft={-20}
            offsetTop={-10}
            captureClick={true}
            captureDoubleClick={true}
            draggable={true}
        >
            <MarkerStyled>
                <img src={pin} alt={lab.city} />
            </MarkerStyled>
        </Marker>
    ));
};
const mapStateToProps = state => {
    return {
        labs: state.labs,
    };
};

export default connect(mapStateToProps)(Markers);
