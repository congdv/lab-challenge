import React from 'react';
import spinner from './spinner.svg';
const Spinner = () => {
    return (
        <div className="text-center pt-2">
            <img src={spinner} alt="Spinner" width="30px" height="30px" />
        </div>
    );
};

export default Spinner;
