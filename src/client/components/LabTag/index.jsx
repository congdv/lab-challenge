import React from 'react';
import Collapsible from 'react-collapsible';

const LabTag = ({ lab }) => {
    return (
        <Collapsible trigger={lab.title} style={{ width: '400px' }}>
            <ul className="list-group">
                <li className="list-group-item">Category: {lab.category}</li>
                <li className="list-group-item">Address: {lab.address}</li>
                <li className="list-group-item">City: {lab.city}</li>
                <li className="list-group-item">Country: {lab.country}</li>
            </ul>
        </Collapsible>
    );
};

export default LabTag;
