import React from "react";

class Form extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
        name: "",
        salary: "",
        desigation: "",
        grade: "",
        year: ""
        };   
    }
    onSubmit(e) {
    e.preventDefault();
    const array1 = [];
    console.log(this.state);
    let data = localStorage.getItem('user');
    let array =  JSON.parse(data);
    if(array!=null){
    array.map(function(value){
         array1.push(value);
    });
    }
    array.push(this.state);
    let unit = data.JSON.parse(array);
    localStorage.setItem('user',JSON.stringify(unit));
    }
    render() {
    return (
        
        <form onSubmit={e => this.onSubmit(e)}>
            <h1>Employee record</h1>
            <div className="form-group">
            <label htmlFor="fname">Name</label>
            <input
            type="text"
            className="form-control"
            id="fname"
            placeholder="Name"
            value={this.state.Name}
            onChange={e => this.setState({ name: e.target.value })}/>
           </div>

            <div className="form-group">
            <label htmlFor="age">Salary</label>
            <input
            type="number"
            className="form-control"
            id="salary"
            placeholder="salary"
            value={this.state.salary}
            onChange={e => this.setState({ salary: e.target.value })}/>
            </div>
              
            <div className="form-group">
            <label htmlFor="Desigation">Desigation</label>
            <select
             value={this.state.desigation}
             onChange={e => this.setState({ desigation: e.target.value })}>
            <option value="engineer">engineer</option>
            <option value="doctor">doctor</option>
            </select>
            </div>
            <div className="form-group"></div>

            <div className="form-group">
            <label htmlFor="Grade">Grade</label>
            <select
            value={this.state.grade}
            onChange={e => this.setState({ grade: e.target.value })}
            >
            <option value="A">A</option>
            <option value="B">B</option>
            </select>
            </div>
            <div className="form-group">
            <label htmlFor="Year">Year</label>
            <select
            value={this.state.year}
            onChange={e => this.setState({ year: e.target.value })}
            >
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            );
        }
    }

export default Form;