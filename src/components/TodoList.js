import React, { Component } from 'react';
// import './Counter.css';

class TodoList extends Component {

  constructor() {
    super();
    this.state = {
      item: ''

    };
  }
  // componentWillReceiveProps() {

  //   setTimeout(() => {
  //     // this.setState({ item: this.props.editVal.text });
  //     this.refs.items.value = this.props.editVal.text;
  //   }, 1000);

  // }

  valueChange(event) {
    this.setState({ item: event.target.value });
    // this.refs.items.value= event.target.value;
  }

  updateListWithInput() {
    if (this.refs.items.value === "") {
      alert("Required field");
    }
    else {
      this.props.update(this.state.item);
      this.refs.items.value = "";
    }

  }
  removeItems() {
    this.props.removeAll();
  }
  closeEdit() {
    this.refs.items.value = "";
    this.props.closeEdit();
  }
  updateItem(item) {
    this.refs.items.value = "";
    this.props.updateItem(this.state.item);
  }

  remove(key) {
    this.props.removeItem(key);
  }
  openEdit(ind) {
    this.refs.items.value = this.props.items[ind]
    this.props.openEdit(ind);
  }


  render() {
    console.log(this.props.items)
    // this.setState({ item: this.props.editVal })
    // console.log(this.props.editVal)
    // console.log(this.state.item)
    var todoEntries = this.props.items;
    var listItems = todoEntries.map((data, ind) => {
      console.log(data, ind)
      //  onClick={() => this.filterMyPosts()}
      // console.log(key)
      // var btn =
      //   <div>
      //     <button className="btn btn-danger float-right" onClick={this.remove.bind(this, ind)} >REMOVE</button>  <button onClick={this.openEdit.bind(this, ind)} className="btn btn-danger float-right" >EDIT</button>
      //   </div>;
      return (

        <li key={ind} className='list-group-item'>{data} <div style={{ width: '100px', margin: 'auto' }}>  <button className="btn btn-danger float-right" onClick={this.remove.bind(this, ind)} > <span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>  <button onClick={this.openEdit.bind(this, ind)} className="btn btn-success float-right" > <span class="glyphicon glyphicon-edit" aria-hidden="true"></span></button></div>
        </li>


      )
    })
    return (
      <div style={{ width: '500px', margin: 'auto' }}>
        {/* <div className="col-lg-6"> */}
        <h1 style={{ color: 'red' }}>TODO LIST USING React + Redux + Bootstrap</h1>
        <h2 style={{ color: 'green' }}>Made By Shehzad Osama</h2>
        <input className="form-control" type="text" ref="items" onChange={this.valueChange.bind(this)} placeholder="Enter work" /><br />

        {this.props.editState ? <div className="input-group" style={{ width: '250px', margin: 'auto' }}>
          <button className="btn btn-success" onClick={this.updateItem.bind(this)}>UPDATE</button>
          <button className="btn btn-danger" onClick={this.closeEdit.bind(this)}>CANCEL</button>
        </div> :
          <div className="input-group" style={{ width: '250px', margin: 'auto'}} >
            <button className="btn btn-success" onClick={this.updateListWithInput.bind(this)}>ADD ITEM</button>
            <button className="btn btn-danger" onClick={this.removeItems.bind(this)}>REMOVE ALL</button>
          </div>

        }


        <ul className='list-group'  style={{ marginTop:'5%'}} >
          {listItems}
        </ul>

      </div>
      // </div>
      //  </div>

    );
  }
}

export default TodoList;
