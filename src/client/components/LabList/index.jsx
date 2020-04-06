import React, { useState } from 'react';
import ListStyled from './Styles';
import LabItem from '../LabItem';
import { connect } from 'react-redux';
const LabList = ({ labs, searchTerm }) => {
    return (
        <ListStyled>
            <div className="list-group">
                {labs.data.map(lab => {
                    if (
                        lab.title
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                        searchTerm.length === 0
                    ) {
                        return <LabItem key={lab.id} lab={lab} />;
                    }
                })}
            </div>
        </ListStyled>
    );
};
const mapStateToProps = state => {
    return {
        labs: state.labs,
    };
};
export default connect(mapStateToProps)(LabList);
