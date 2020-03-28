import ReactMapGL, { NavigationControl, GeolocateControl } from 'react-map-gl';
import React, { useState, useEffect } from 'react';
import MapStyled from './Styles';
import labAction from '../../actions/lab.action';
import { connect, useDispatch } from 'react-redux';
import Markers from '../Markers';
import LabPopup from '../LabPopup';
import { mapConstants } from '../../constants';
import Spinner from '../Spinner';

const MAPBOX_TOKEN =
    'pk.eyJ1IjoiY29uZ2R2IiwiYSI6ImNrOGFsNnc1bTA5ODgza281YWx3aXBrZDAifQ.kT_8rgTFRLSC40SThJVIEw';

const Map = ({ labs, map, getAll }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        getAll();
    }, []);

    if (labs.loading) {
        return <Spinner />;
    }
    const onViewChange = viewport => {
        const { width, height } = viewport;
        // setViewport(viewport);
        dispatch({ type: mapConstants.LOCATING_SUCCESS, data: viewport });
    };
    return (
        <MapStyled>
            <ReactMapGL
                width="100%"
                height="100%"
                {...map.viewport}
                onViewportChange={onViewChange}
                mapboxApiAccessToken={MAPBOX_TOKEN}
            >
                {labs.data.map(lab => (
                    <LabPopup key={lab.id} lab={lab} isShow={true} />
                ))}
                <Markers />
                <div style={{ position: 'absolute', right: 0, top: 30 }}>
                    <NavigationControl />
                </div>

                <GeolocateControl
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                    label="Your location"
                />
            </ReactMapGL>
        </MapStyled>
    );
};

const mapStateToProps = state => {
    return {
        labs: state.labs,
        map: state.map,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAll: () => {
            dispatch(labAction.getAll());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
