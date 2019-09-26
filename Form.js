import React from "react";

class Form extends React.Component {
    state = { input: "" };
    handleInputChange = event => {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit = e => {
        this.props.addItem(this.state.input);
        this.setState({ input: "" });

    }
    render() {
        return (
            <div>
                <input type="text"
                    className="form-control"
                    onChange={this.handleInputChange}
                    value={this.state.input}>
                </input>
                <button className="btn btn-block btn btn-outline-primary"
                    onClick={this.handleSubmit}>Add Todo
                </button>
            </div>
        );
    }
}
export default Form;
