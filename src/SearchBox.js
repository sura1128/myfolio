import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--washed-red bg-white'
                type='search'
                placeholder='search projects'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;