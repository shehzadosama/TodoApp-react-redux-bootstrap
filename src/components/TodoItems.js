import React, { Component } from 'react';


class TodoItems extends Component {


  remove(key) {
    this.props.removeItem(key);
  }
  openEdit(key) {
    this.props.openEdit(key);
  }

  render() {
    // alert("Render");
    var todoEntries = this.props.items;
    var listItems = Object.keys(todoEntries).map((key) => {
      //  onClick={() => this.filterMyPosts()}
      // console.log(key)
      var btn = 
      <div>
        <button onClick={this.remove.bind(this, key)} >REMOVE</button>  <button onClick={this.openEdit.bind(this,key)} >EDIT</button>
      </div>;
      return (
        
          <li key={key}>{todoEntries[key].text}{btn}</li>

       
      )
    })







    // var btn = <button onClick={this.remove.bind(this,item.key)} >REMOVE</button>;
    //   var todoEntries = this.props.items;   // this.props get the value of entries which is passed from TodoList

    //   function createTasks(item) {
    //     return <li key={item.key}>{item.text}{btn}</li>
    //   }



    //   var listItems = todoEntries.map(createTasks);
    return (
      <div >
        <div>
          In TodoItems
        </div>
        <ul className="theList">
          {listItems}
        </ul>
      </div>
    );
  }
}

export default TodoItems;
