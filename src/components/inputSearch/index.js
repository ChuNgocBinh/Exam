import React from 'react';
import cn from 'classnames';

const InputSearch = ({ label, onChange, className, value, placeholder }) => {
    return (
        <div className={cn('input-search', className)}>
            <label className='label' >{label}</label>
            <input onChange={onChange} className='input' value={value} placeholder={placeholder}/>
        </div>
    )
}

export default InputSearch;