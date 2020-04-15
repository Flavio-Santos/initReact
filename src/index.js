import React from 'react';
import ReactDOM from 'react-dom';


import { GoodAfternoon, GoodNight } from './components/Multiply';
import Welcome from './components/Welcome';
import Father from './components/Father';
import Son from './components/Son';



ReactDOM.render(
    <div>
        <GoodAfternoon name='Santana' />
        <GoodNight name='jusara' />
        <Welcome type='bom dia' name='Santos' />
        <Father name="Flávio" lastName="Avelino">
            <Son name='John'  />
            <Son name='John carter'  />
            <Son name='Anne'  />
            <Son name='Marya'  />
        </Father>
    </div>,
    document.getElementById('root')
)