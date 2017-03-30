import $ from 'jquery';
import React from 'react';
import Instrument from '../ins/instrument-es6';

class WhiteKey extends React.Component {
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
        $(this.refs.whiteKey).bind('touchstart', function () {
            ins.play();
        });
        $(this.refs.whiteKey).bind('touchend', function () {
            ins.stop();
        });
    }
    render() {
        let thisClassname = "whiteKey_";
        thisClassname = this.props.type ? thisClassname + this.props.type : '';
        return (
            <div ref="whiteKey" className={"whiteKey " + (thisClassname) }>{this.props.name}</div>
        );
    }
}

export default WhiteKey;

