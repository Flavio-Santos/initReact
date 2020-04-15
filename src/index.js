import React from 'react';
import ReactDOM from 'react-dom';


import {GoodAfternoon, GoodNight} from './components/Multiply';
import Welcome from './components/Welcome';
import Father from './components/Father';



ReactDOM.render(
    <div>
        <GoodAfternoon  name='Santana'/>
        <GoodNight  name='jusara'/>
        <Welcome type='bom dia' name='Santos'/>
        <Father name="Flávio" lastName="Avelino"/>
    </div>,
    document.getElementById('root')
)