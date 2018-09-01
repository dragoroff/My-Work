import React, {Component} from 'react';

export default class Example extends Component {

    onChange = (e) => {
        this.props.onChangeProgress && this.props.onChangeProgress(this.props.id, e.target.value)
    }
    render() {
        return (
            <div>
                <input className="slider"
                value={this.props.defaultValue}
                onChange={this.onChange}
                type="range"
                min="0"
                max="100"
                />
                {this.props.children}
                </div>
        )
    }
}