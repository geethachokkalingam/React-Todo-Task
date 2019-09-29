import React, {Component} from 'react';
// import './App.css';
import TaskForm from './TaskForm'
import TaskCard from './TaskCard'

class App extends Component {
  inputElement = React.createRef()
  constructor() {
    super()
    this.state = {
      items: [],
      edit: false,
      id: null,
      isSubmitted: false,
      currentItem: {
        text: '',
        key: '',
      },
      currentDesc: {
        desc:'Quality',
        key: ''
      }
    }
  }
  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText}
    this.setState({
      currentItem,
    })
  }
  handleSelectChange = e => {
    const itemDesc = e.target.value
    const currentDesc = { desc: itemDesc}
    this.setState({
      currentDesc,
    })
  }
  deleteItem = key => {
    const filterRow = this.state.items.filter(item => {
      return item.key !== key
    })
    if (filterRow.length !== 0 ) {
      this.setState({
        items: filterRow,
      })
    } else {
      this.setState({
        isSubmitted: false
      })
    }
   
  }

  editOHC = (key,desc) => {
    this.setState({
      edit: true,
      id: key,
      currentDesc: {
        desc: desc
      }
    })

  }
  onUpdateHandle(event) {
    event.preventDefault();
    this.setState({
      items: this.state.items.map(item => {
        if (item.key === this.state.id) {
          item['text'] = event.target.updatedItem.value;
          return item;
        }
        return item;
      })
    });

    this.setState({
      edit: false
    });
  }
  onCancel() {
    this.setState({
      edit: false
    });
  }
 renderEditForm() {
    if (this.state.edit) {
      return <div className="editForm">
         <form onSubmit={this.onUpdateHandle.bind(this)}>
           <div className="row mr-0 ml-0 padBot">
              <div className="col-12 col-md-4 col-lg-8">
                  <label>Deparment<span className="padLeft">:</span></label>
                  <span className="padLeft">{this.state.currentDesc.desc}</span>
              </div>
           </div>
           <div className="row mr-0 ml-0 padBot">  
              <div className="col-10 col-md-3 col-lg-5">
              <label>OverHead Cost<span className="padLeft">:</span></label>
              </div>
              <div className="col-10 col-md-6 col-lg-6">
              <input type="text" name="updatedItem" className="item form-control" placeholder="Enter updated OHC"/>
              </div>
           </div>
           <div className="row mr-0 ml-0">
              <div className="col-4 col-md-2 col-lg-3">
              <button className="btn btn-primary update-btn">Update</button>
              </div>
              <div className="col-4 col-md-2 col-lg-3">
              <button className="btn btn btn-warning update-btn" onClick={this.onCancel.bind(this)}>Cancel</button>
              </div>
           </div>
        </form>
      </div>
    }
  }
  

  addFeedBack = e => {
    e.preventDefault()
    const key = Date.now()
    const newItem = {text: this.state.currentItem.text ,desc: this.state.currentDesc.desc, key: key}
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
        currentDesc: { desc: this.state.currentDesc.desc, key: ''},
        isSubmitted: true
      })
    }
  }
  render() {
    return (
      <div className="App">
        <TaskForm defalutvalue={this.state.defaultValue} addFeedBack={this.addFeedBack} handleInput={this.handleInput} handleSelectChange={this.handleSelectChange} inputElement={this.inputElement} currentItem={this.state.currentItem}/>
        {this.state.isSubmitted && <TaskCard entries={this.state.items} editState={this.state.edit} deleteItem={this.deleteItem} editOHC={this.editOHC}/> }
        {this.renderEditForm()}
      </div>
    );
  }
 
}

export default App;
