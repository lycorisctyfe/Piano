var $ = require("jquery");
var React = require("react");
var ReactDOM = require("react-dom");
var Instrument = require('./ins/instrument.js');
require('../css/style.css');

$(function () {
    var WhiteKey = React.createClass({
        getInitialState : function () {
            return {
                keyState : 'up'
            }
        },
        whiteKeyControl : function (_state) {
            var keyState = this.state.keyState;
            if (_state === 'down' && this.state.keyState == 'up') {
                keyState = 'down';
            } else if (_state === 'up' && this.state.keyState == 'down') {
                keyState = 'up';
            }
            this.setState({
                keyState: keyState
            });
        },
        componentDidMount : function () {
            var _this = this;
            var opt = {
                pitch: _this.props.pitch,
                volume: 0.7,
                oscillatorType: 'square',
                isFadeOut: 0,
                fadeOutPlayMode: 'play'
            };
            var ins = new Instrument(opt);
            $(this.refs.whiteKey).bind('touchstart', function () {
                ins.play();
            });
            $(this.refs.whiteKey).bind('touchend', function () {
                ins.stop();
            });

        },
        render : function () {
            var thisClassname = "whiteKey_";
            thisClassname = this.props.type ? thisClassname + this.props.type : '';
            return (
                <div ref="whiteKey" className={"whiteKey "+(thisClassname)}>{this.props.name}</div>
            );
        }
    });

    var BlackKey = React.createClass({
        getInitialState : function () {
            return {
                keyState : 'up'
            }
        },
        blackKeyControl : function (_state) {
            var keyState = this.state.keyState;
            if (_state === 'down' && this.state.keyState == 'up') {
                keyState = 'down';
            } else if (_state === 'up' && this.state.keyState == 'down') {
                keyState = 'up';
            }
            this.setState({
                keyState: keyState
            });
        },
        componentDidMount : function () {
            var _this = this;
            var opt = {
                pitch: _this.props.pitch,
                volume: 0.7,
                oscillatorType: 'square',
                isFadeOut: 0,
                fadeOutPlayMode: 'play'
            };
            var ins = new Instrument(opt);
            $(this.refs.blackKey).bind('touchstart', function () {
                ins.play();
            });
            $(this.refs.blackKey).bind('touchend', function () {
                ins.stop();
            })
        },
        render : function () {
            var thisClassname = "blackKey_";
            thisClassname = this.props.type ? thisClassname + this.props.type : '';
            return (
                <div ref="blackKey" className={"blackKey "+(thisClassname)}></div>
            );
        }
    });

    var PartOfAPiano = React.createClass({
        getInitialState: function(){
            return {
                pitchList : ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B']
            }
        },
        render : function () {
            var items = [];
            if (this.state.pitchList.length > 0){
                this.state.pitchList.map((item, index)=>{
                    var pitch = item + this.props.num;
                    if (item.indexOf('#') > -1) {
                        var type = item.replace('#','');
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
    });

    var PianoWrapper = React.createClass({
        getInitialState : function () {
            return {
                length : 8
            }
        },
        render : function () {
            var lists = [];
            for (var i = 0; i < this.state.length; i ++) {
                lists.push(<PartOfAPiano num={i} key={i} />)
            }
            return (
                <div className="pianoWrapper">
                    {lists}
                </div>
            );
        }
    });

    ReactDOM.render(
        <PianoWrapper />,
        document.getElementById('pianoDisplayBox')
    );

});


