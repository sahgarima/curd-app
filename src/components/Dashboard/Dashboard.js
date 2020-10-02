import React, { Component } from 'react';
import styles from './Dashboard.scss'
import Read from '../Read/Read'
import { connect } from 'react-redux';
import { getList, addItem, createRow, deleteRow, updateRow, editRow } from '../../Redux/actions';
import Create from '../Create/Create'

const mStateToProps = (state) => {
    return state
}
const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' }),
        reset: () => dispatch({ type: 'RESET' })
    }
}
class Dashboard extends Component {

    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.dispatch(getList())
    }
    addItem = () => {
        if (!this.props.isCreateItem) this.props.dispatch(addItem(true))

    }
    edit = (id) => {
        this.props.dispatch(editRow(id))
    }
    createRow = (obj) => {
        if (obj.first != "") {
            this.props.dispatch(createRow(obj));
        }

        this.props.dispatch(addItem(false));

    }
    cancleCreate = () => {
        this.props.dispatch(addItem(false));
    }
    cancleUpdate = () => {
        this.props.dispatch(editRow(0));
    }
    updateRow = (obj) => {
        if (obj.first != "") {
            this.props.dispatch(updateRow(obj));
        }
        this.props.dispatch(editRow(0));
    }
    removeRow = (id) => {
        this.props.dispatch(deleteRow(id));
    }
    render() {
        return (
            <div className="App">
                <header className="text-center gap-top">
                    <h2>CURD Application</h2>
                </header>
                <div className="container">

                    <div className="page-header gap-top">
                        <div className="pull-right col-sm">
                            <button className="btn btn-outline-success" onClick={this.addItem} type="button">+ Add Info</button>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="row gap-top">
                        <div className="col-sm">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">S.N</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Update</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.isCreateItem && (
                                            <Create createRow={this.createRow} cancleCreate={this.cancleCreate} />

                                        )
                                    }
                                    {
                                        this.props.allList == 0 && (
                                            <tr> <td colSpan="6">No Data Found</td></tr>

                                        )
                                    }
                                    {
                                        this.props.allList && this.props.allList.map((data, index) => {
                                            return (<Read key={index} data={data} id={index + 1} removeRow={this.removeRow} edit={this.edit} update={this.updateRow} isUpdate={this.props.updateid == data.id} cancleUpdate={this.cancleUpdate}></Read>)
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </div >
        );
    }
}

export default connect(mStateToProps)(Dashboard)
