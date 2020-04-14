import React from 'react';
import ReactDOM from 'react-dom';

import Good from './components/GoodMorning'

import multi from './components/Multiply';

ReactDOM.render(
    <div>
        <multi.GoodAfternoon  name='Santana'/>
        <multi.GoodNight  name='jusara'/>

    </div>,
    document.getElementById('root')
)