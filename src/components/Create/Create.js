import React, { useState } from 'react';

export default function Read(props) {
    let [state, setState] = useState({ id: Math.floor(Math.random() * (999 - 100 + 1) + 100), first: "", last: "", address: "" })

    function addItem() {
        props.createRow(state)
    }
    function cancleCreate() {
        props.cancleCreate()
    }
    const handleChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,

            [name]: value
        }));
    };
    return (
        <tr>
            <td></td>
            <td><input name="first" value={state.first} type="text" onChange={handleChange} /></td>
            <td><input name="last" value={state.last} type="text" onChange={handleChange} /></td>
            <td><input name="address" value={state.address} type="text" onChange={handleChange} max="11" /></td>
            <td>
                <span className="table-add"><button type="button"
                    className="btn btn-primary btn-rounded btn-sm my-0" onClick={addItem}>Add Row</button></span>
            </td>
            <td>
                <span className="table-add"><button type="button"
                    className="btn btn-secondary btn-rounded btn-sm my-0" onClick={cancleCreate}>Cancel</button></span>
            </td>
        </tr>
    )

}