import React, { Component} from 'react';

export default class Welcome extends Component {
    
    state = {
        type: this.props.type,
        name: this.props.name
    }

    constructor(props) {
        super(props);

        this.setType = this.setType.bind(this);
    }

    setType(event) {
        debugger
        this.setState({
            type: event.target.value
        }) 
    }

    setName(event) {
        debugger
        this.setState({
            name: event.target.value
        }) 
    }

    render() {
        const {type, name} = this.state;
        return (
            <div>
                <h1>{type}  {name}</h1>
                <hr/>
                <input type="text" placeholder='Tipo..' 
                    onChange={this.setType} 
                    value={type}/>
                <input type="text" 
                    onChange={e => this.setName(e)} 
                    placeholder='Nome...' value={name}/>
            </div>
        )
    }
}