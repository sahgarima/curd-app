import React ,{useState}from 'react';
export default function Read(props) {
    let [state, setState] = useState({ id: props.data.id, first: props.data.first ,last: props.data.last, address: props.data.address })


    function deleteRow() {
        props.removeRow(props.data.id)
    }
    function edit() {
        props.edit(props.data.id)
    }
    function update() {
        props.update(state)
    }
    function cancleUpdate(){
        props.cancleUpdate()
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            
            [name]: value
        }));
    };
    return (
        <>
            {!props.isUpdate && (
                <tr>
                    <th scope="row">{props.id}</th>
                    <td>{props.data.first}</td>
                    <td>{props.data.last}</td>
                    <td>{props.data.address}</td>
                    <td>
                        <span className="table-remove"><button type="button"
                            className="btn btn-danger btn-rounded btn-sm my-0" onClick={edit}>Edit</button></span>
                    </td>
                    <td>
                        <span className="table-remove"><button type="button" onClick={deleteRow}
                            className="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
                    </td>
                </tr>
            )}

            {props.isUpdate && (
                <tr>
                    <th scope="row">{props.id}</th>
                    <td><input name="first" value={state.first} type="text" onChange={handleChange} /></td>
                    <td><input name="last" value={state.last} type="text" onChange={handleChange} /></td>
                    <td><input name="address" value={state.address} type="text" onChange={handleChange} max="11" /></td>
                    <td>
                        <span className="table-remove"><button type="button"
                            className="btn btn-danger btn-rounded btn-sm my-0" onClick={update}>Update</button></span>
                    </td>
                    <td>
                <span className="table-add"><button type="button"
                    className="btn btn-secondary btn-rounded btn-sm my-0" onClick={cancleUpdate}>Cancel</button></span>
            </td>
                </tr>
            )
            }
        </>
    )

}