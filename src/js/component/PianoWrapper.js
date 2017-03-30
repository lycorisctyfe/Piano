import React from 'react';
import PartOfAPiano from './PartOfAPiano';

class PianoWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            length : 8
        }
    }
    render () {
        let lists = [];
        for (let i = 0; i < this.state.length; i ++) {
            lists.push(<PartOfAPiano num={i} key={i} />)
        }
        return (
            <div className="pianoWrapper">
                {lists}
            </div>
        );
    }
}

export default PianoWrapper;