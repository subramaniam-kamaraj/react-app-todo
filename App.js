import React from "react";
import Form from "./Form";
import Lis from "./Lis";
import Navbar from "./Nav";
import axios from  "axios"

class App extends React.Component {
    state = {
        list: []
    };

    componentDidMount(){

        axios.get("http://localhost:8000/todos")
        .then(result =>{
            console.log(result)
            this.setState({list:result.data})

        }).catch(err => console.log(err))

    }

    addItem = inputText => {
        //console.log("new item", value);
        axios.post("http://localhost:8000/todos",{title:inputText})
        .then(success=>{
            console.log(success)
        this.setState({
            list: [...this.state.list, success.data]
        });
    }).catch(err=>console.log(err))
};

    handleDelete = idd =>{

        axios.delete("http://localhost:8000/todos/"+idd)
        .then(success =>{
            console.log(success);
            if (success.status===200 && success.statusText==="OK")
            {
                this.setState(
                {
                    list: this.state.list.filter(i => i.id !== idd)
                })
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <Navbar />
                        <Form addItem={this.addItem} /><br></br><br></br>
                        <Lis items={this.state.list} handleDelete={this.handleDelete.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
};
export default App;
