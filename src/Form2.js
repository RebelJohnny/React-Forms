import React, { Component } from 'react'

export default class Form2 extends Component {
    
    constructor(props) {
        super(props);
        this.state = {name: '',desc:'test',type:'mgr'};
    
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

      }
    
      handleChangeInput(event) {
        this.setState({name: event.target.value});
      }

      
      handleChangeDescription(event) {
        this.setState({desc: event.target.value});
      }
    

      handleChangeType(event){
        this.setState({type: event.target.value});
      }
      handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.name);
        console.log('A description was submitted: ' + this.state.desc);
        console.log('A Employee Type was submitted: ' + this.state.type);
        console.log("***************************")
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text"  onChange={this.handleChangeInput} />
            </label>
            <br/>
            <label>
              Description:
            </label><br/>
            <textarea  value={this.state.desc} maxLength={"150"} onChange={this.handleChangeDescription} /><br/>
            <select value={this.state.type} onChange={this.handleChangeType}>
              <option  value="emp">Employee</option>
              <option value="mgr">Manager</option>
              <option  value="wkr">Worker</option>
              
          </select>
          <br/>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }
