 import React, { Component } from 'react'
  class TaskForm extends Component {
    componentDidUpdate() {
        this.props.inputElement.current.focus()
      }
    render () {
        const selectValue = this.props.defalutvalue
        console.log(selectValue)
        return (
            <div className="task">
                <p className="heading">OverHead Cost Target Table</p>
                <div className="taskForm">
                <form onSubmit={this.props.addFeedBack}>
                <div className="row mr-0 ml-0 padBot">
                    <div className="col-10 col-md-3 col-lg-5"> 
                        <label className="title">Department<span className="float-right padLeft">:</span></label>
                    </div>
                    <div className="col-10 col-md-6 col-lg-6">
                        <select value={selectValue} onChange={this.props.handleSelectChange} className="form-control">
                            <option value="Quality">Quality</option>
                            <option value="Operation">Operation</option>
                            <option value="Procurement">Procurement</option>
                            <option value="Project">Project</option>
                            <option value="HR">HR</option>
                        </select>
                    </div>
                </div>
                <div className="row mr-0 ml-0 padBot">
                    <div className="col-10 col-md-3 col-lg-5">
                        <label className="title">OverHead Cost<span className="float-right padLeft">:</span></label>
                    </div>
                    <div className="col-10 col-md-6 col-lg-6">
                        <input className="form-control" value={this.props.currentItem.text} ref={this.props.inputElement} placeholder="Enter OHC value in %" onChange={this.props.handleInput}></input>
                    </div>
                </div>
                <div className="row mr-0 ml-0">
                    <div className="col-4 col-md-3 col-lg-3">
                    <button type="submit" className="btn btn-primary btn-align">Add</button>
                    </div>
                </div>
                </form>
                </div>
            </div>
            
        )
    }
  }
  export default TaskForm