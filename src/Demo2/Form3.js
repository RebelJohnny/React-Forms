import React, { useState } from 'react'

export const Form3 = props => {
    const submit = (e) => {
     
        var form = new FormData(e.target);
        console.log(form)
        console.log(form.get('firstName'));
        console.log(form.get('lastName'));
        e.preventDefault()
    }

    return (
        <form onSubmit={submit}>
          
            Name:
            <input type="text" name="firstName" />
            Surname:
            <input type="text" name="lastName" />
            <input type="submit" name="Save" />
        </form>
    )
}