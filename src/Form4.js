import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) => {
  console.log("state => "+state)
  console.log("event => "+event)
    if(event.reset) {
       
        return {
          car: '',
          count: 0,
          name: '',
          'gift-wrap': false,
        }
      }
 return {
  
   ...state,[event.name]: event.value
 }
}

function Form4() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
    console.log(formData)
    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true
      })
    }, 3000);
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return(

        <div className="wrapper">
          <h1>Siapa International</h1>
          {submitting &&
            <div>
              You are submitting the following:
              <ul>
                {Object.entries(formData).map(([name, value]) => (
                  <li key={name}><strong>{name}</strong>: {value.toString()}</li>
                ))}
              </ul>
            </div>
          }
        <form onSubmit={handleSubmit}>
        <fieldset disabled={submitting}>
          <label>
            <p>Name</p>
            <input name="name" onChange={handleChange} value={formData.name || ''}/>
          </label>
        </fieldset>
        <fieldset disabled={submitting}>
          <label>
            <p>Cars</p>
            <select name="car" onChange={handleChange} value={formData.car || ''}>
                <option value="">--Please choose an option--</option>
                <option value="Tiba">Tiba</option>
                <option value="Saina">Saina</option>
                <option value="Shahin">Shahin Crisp</option>
            </select>
          </label>
          <label>
            <p>Count</p>
            <input type="number" name="count" onChange={handleChange} step="1" value={formData.count || ''}/>
          </label>
          <label>
            <p>Gift Wrap</p>
            <input
              checked={formData['gift-wrap'] || false}
              disabled={formData.car !== 'tiba'}
              name="gift-wrap"
              onChange={handleChange}
              type="checkbox"
            />
          </label>
        </fieldset>
        <button type="submit" disabled={submitting}>Submit</button>
      </form>
    </div>
  )
}
export default Form4;