import React, {Component} from 'react';

export default class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            value: this.title.value
        });
    }

    render() {
        return (<form onSubmit={this.handleSubmit}>
            <label className='label labelTitle'>Enter a title...</label>
            <input className='input inputTitle' type='text' name='title' ref={(el) => this.title = el} />
            <div>{this.state.value}</div>
        </form>);
    }
}