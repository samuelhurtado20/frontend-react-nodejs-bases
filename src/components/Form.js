//import React from 'react'
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Form() {
    const [name, setName] = useState('')
    const [lastName, setlastName] = useState('')
    const [salary, setSalary] = useState('')

    const addEmployee = async (e) => {
        e.preventDefault()
        const newEmployee = { name, lastName, salary }
        const response = await axios.post('http://localhost:4020/api/test/create', newEmployee)
        console.log(response)
    }

    return (
        <div className="container col-md-4 mt-4">
            <form onSubmit={addEmployee}>
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" onChange={e => setName(e.target.value)} placeholder='Name' required />
                </div>

                <div className="mb-3">
                    <label for="lasName" className="form-label">Last name</label>
                    <input type="text" className="form-control" onChange={e => setlastName(e.target.value)} placeholder='Last Name' required />
                </div>

                <div className="mb-3">
                    <label for="salary" className="form-label">Salary</label>
                    <input type="number" className="form-control" onChange={e => setSalary(e.target.value)} placeholder='salary' required />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    )
}
