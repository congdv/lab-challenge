import React, { useState } from 'react';
import { Sidebar, SearchInput } from './Styles';
import searchIcon from './search.svg';
import LabList from '../LabList';
const LabSidebar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const onChange = event => {
        event.preventDefault();
        setSearchTerm(event.target.value);
    };
    return (
        <Sidebar className="sidebar">
            <div className="brand">Labs Challenge</div>
            <SearchInput>
                <img src={searchIcon} alt="search icon" />
                <input
                    type="text"
                    placeholder="Search nearby lab"
                    onChange={onChange}
                    value={searchTerm}
                />
            </SearchInput>
            <LabList searchTerm={searchTerm} />
        </Sidebar>
    );
};

export default LabSidebar;
