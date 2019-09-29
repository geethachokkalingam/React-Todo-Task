import React, { Component } from 'react';
import Edit from "./edit.png";
import Delete from "./trash.png"


class TaskCard extends Component {
    createTasks = item => {
        return (
          <tr key={item.key}>
            <td>{item.desc}</td>
            <td>{item.text}</td>
            <td><button type="button" className="btn btn-outline-primary marRight editmarBottom" onClick={() => this.props.editOHC(item.key,item.desc)}><img src={Edit} alt="Edit"></img></button><button type="button" className="btn btn-outline-danger editmarBottom" onClick={() => this.props.deleteItem(item.key)}><img src={Delete} alt="Delete"></img></button></td>
          </tr>
         
        )
      }
      render() {
        const todoEntries = this.props.entries
        const listItems = todoEntries.map(this.createTasks)
        return <div className="ohc-table">
                    <table className="table table-sm">
                        <thead className="thead-dark">
                        <tr>
                            <th>Department</th>
                            <th>OverHead Cost</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {listItems}
                        </tbody>
                    </table>
                </div>
      }
}
export default TaskCard 
