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
        // const taskList1 = [...this.state.taskList];
        // taskList1.splice(index, 1);
        // this.setState({ taskList: taskList1 });
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
                    <div className="row" style={{ marginTop: 20 }}>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-12">
                            <div className="card">
                            <div className="card-header text-center">Task</div>
                                <div className="card-body">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="required" >Payment Type</th>
                                                <th className="required" >Payment Description</th>
                                                <th>Payment Code</th>
                                                <th>Payment Code Description</th>
                                                <th>From Date</th>
                                                <th>To Date</th>
                                                <th>Currency ID</th>
                                                <th>Currency</th>
                                                <th>Base Currency</th>
                                                <th>Currency Amount</th>
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