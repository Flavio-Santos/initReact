import React from 'react';
import ReactDOM from 'react-dom';


import {GoodAfternoon, GoodNight} from './components/Multiply';
import Welcome from './components/Welcome';



ReactDOM.render(
    <div>
        <GoodAfternoon  name='Santana'/>
        <GoodNight  name='jusara'/>
        <Welcome type='bom dia' name='Santos'/>
    </div>,
    document.getElementById('root')
)