import $ from 'jquery';
import React from 'react';
import Instrument from '../ins/instrument-es6';

class BlackKey extends React.Component {
    componentDidMount() {
        let _this = this;
        const opt = {
            pitch: _this.props.pitch,
            volume: 0.7,
            oscillatorType: 'square',
            isFadeOut: 0,
            fadeOutPlayMode: 'play'
        };
        let ins = new Instrument(opt);
        $(this.refs.blackKey).bind('touchstart', function () {
            ins.play();
        });
        $(this.refs.blackKey).bind('touchend', function () {
            ins.stop();
        })
    }

    render() {
        let thisClassname = "blackKey_";
        thisClassname = this.props.type ? thisClassname + this.props.type : '';
        return (
            <div ref="blackKey" className={"blackKey "+(thisClassname)}></div>
        );
    }
}

export default BlackKey;
