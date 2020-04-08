import React from "react"
import TaskList from "./taskList"
class Form extends React.Component {
    state = {
        taskList: [{ index: Math.random(), payment_type: "", payment_description: "", payment_code: "", payment_code_description: "", from_date: "", to_date: "", currency_id: "", currency: "", base_currency: "", currency_amount: "" }]
    }

    handleChange = (e) => {
        if (["payment_type", "payment_description", "payment_code", "payment_code_description", "from_date", "to_date", "currency_id", "currency", "base_currency", "currency_amount"].includes(e.target.name)) {
            let taskList = [...this.state.taskList]
            taskList[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    addNewRow = (e) => {
        this.setState((prevState) => ({
            taskList: [...prevState.taskList, { index: Math.random(), payment_description: "", payment_code: "", payment_code_description: "", from_date: "", to_date: "", currency_id: "", currency: "", base_currency: "", currency_amount: "" }],
        }));
    }

    deteteRow = (index) => {
        this.setState({
            taskList: this.state.taskList.filter((s, sindex) => index !== sindex),
        });
        
    }
    clickOnDelete(record) {
        this.setState({
            taskList: this.state.taskList.filter(r => r !== record)
        });
    }
    render() {
        let { taskList } = this.state
        return (
            <div className="content">
                <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                    <div className="row" style={{ marginTop: 10 }}>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <table className="table" size="sm">
                                        <thead>
                                            <tr>
                                                <th style={{fontFamily:'Serif', textAlign:'left', fontSize:15}}>Payment Type</th>
                                                <th style={{fontFamily:'Serif', textAlign:'left', fontSize:15}}>Payment Description</th>
                                                <th style={{fontFamily:'Serif', textAlign:'left', fontSize:15}}>Payment Code</th>
                                                <th style={{fontFamily:'Serif', textAlign:'left', fontSize:15}}>Payment Code Description</th>
                                                <th style={{fontFamily:'Serif', textAlign:'left', fontSize:15}}>From Date</th>
                                                <th style={{fontFamily:'Serif', textAlign:'left', fontSize:15}}>To Date</th>
                                                <th style={{fontFamily:'Serif', textAlign:'left', fontSize:15}}>Currency ID</th>
                                                <th style={{fontFamily:'Serif', textAlign:'left', fontSize:15}}>Currency</th>
                                                <th style={{fontFamily:'Serif', textAlign:'left', fontSize:15}}>Base Currency</th>
                                                <th style={{fontFamily:'Serif', textAlign:'left', fontSize:15}}>Currency Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <TaskList add={this.addNewRow} delete={this.clickOnDelete.bind(this)} taskList={taskList} />
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Form