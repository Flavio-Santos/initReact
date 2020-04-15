
import React from 'react';
import Son from './Son';
import { childrenWithProps } from '../utils/ultils';

export default props =>
    <div>
        <h1>{props.name}  {props.lastName}</h1>

        <h2>Filhos</h2>

        <ul>
            {/* {props.children} */}
            {childrenWithProps(props)}

        </ul>
    </div>
