import React from 'react'

export const Form2FuncComp = () => {


    const [name, SetName] = React.useState('')
    const [desc, SetDesc] = React.useState('')
    const [type, SetType] = React.useState('')

    handleChangeInput(event) {
        SetName(...)
      }

      
      handleChangeDescription(event) {
        SetDesc()
      }
    

      handleChangeType(event){
        SetType()
      }
      handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.name);
        console.log('A description was submitted: ' + this.state.desc);
        console.log('A Employee Type was submitted: ' + this.state.type);
        console.log("***************************")
        event.preventDefault();
      }
  return (
    <div>
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
    </div>
  )
}

export default Form2FuncComp
