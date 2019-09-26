import React from "react";
class Lis extends React.Component {

    markComplete = e =>{
        e.target.style.textDecoration="line-through" 
    }
    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.props.items.map(i => {
                            return (
                                <li key={i.id} className="list-group-item">
                                    <span onClick={this.markComplete}>{i.title}</span> 
                                    <span className="float-right btn btn-outline-primary" onClick={this.props.handleDelete.bind(this,i.id)}>Delete</span>  
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}
export default Lis;