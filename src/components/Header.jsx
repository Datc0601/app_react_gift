import React from 'react';

const Header = ({ onSearch }) => {
    return(
        <header>
            <h1>GIF-DT</h1>
            <input type="text" placeholder='Busca el gif de tu gusto aqui...'
            onChange={(e)=> onSearch(e.target.value)} />
        </header>
    )
}

export default Header;