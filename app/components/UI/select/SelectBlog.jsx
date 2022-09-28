import React from 'react';

const SelectBlog = ({ option, defaultValue, value, onChange }) => {
    return (

        <select
            className="form-select form-select-sm w-25 mb-3"
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {option.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>

    );
};

export default SelectBlog;