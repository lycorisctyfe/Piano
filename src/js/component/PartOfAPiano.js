import React from 'react';
import WhiteKey from './WhiteKey';
import BlackKey from './BlackKey';

class PartOfAPiano extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pitchList : ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B']
        };
    }
    render() {
        let items = [];
        if (this.state.pitchList.length > 0){
            this.state.pitchList.map((item, index)=>{
                let pitch = item + this.props.num;
                if (item.indexOf('#') > -1) {
                    let type = item.replace('#','');
                    items.push(<BlackKey  pitch={pitch} type={type} key={index}/>)
                } else {
                    items.push(<WhiteKey  pitch={pitch} type={item} key={index}/>)
                }

            })
        }
        return (
            <div className="partOfAPiano">
                {items}
            </div>
        );
    }

}

export default PartOfAPiano;