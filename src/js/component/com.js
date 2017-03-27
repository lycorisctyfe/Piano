var TitleComponent = React.createClass({
    propTypes : {
        name : React.PropTypes.string.isRequired
    },
    getInitialState : function () {
        return {
            opacity : 1.0
        }
    },
    componentDidMount : function () {
        this.timer = setInterval(function () {
            var opacity = this.state.opacity;
            opacity -= 0.05;
            if (opacity < 0.1) {
                opacity = 1.0
            }
            this.setState({
                opacity : opacity
            });
        }.bind(this), 100);
    },
    render : function () {
        return <h3 style={{opacity : this.state.opacity}}>{this.props.name}</h3>;
    }
});

var OlComponent = React.createClass({
    render : function () {
        return (
            <ol>
                {
                    React.Children.map(this.props.children, function (child) {
                        return <li>{child}</li>;
                    })
                }
            </ol>
        );
    }
});

var InputTextComponent = React.createClass({
    getInitialState : function () {
        return {
            currentValue : false
        }
    },
    clickHandler : function () {
        this.setState({
            currentValue : ! this.state.currentValue
        });
    },
    render : function () {
        return (
            <div>
                <input type="text" ref="textInput" value={this.state.currentValue} />
                <button onClick={this.clickHandler}>button</button>
            </div>
        );
    }
});


