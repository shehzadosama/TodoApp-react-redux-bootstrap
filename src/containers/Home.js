import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './App.css';

// import CounterAction from './../../store/actions/counter'
import ItemsAction from './../store/actions/Items'
// import CounterMiddleware from './../../store/middlewares/counterMiddleware'

// import Counter from '../../components/counter/Counter'
import TodoList from '../components/TodoList'
import TodoItems from '../components/TodoItems'
//  import TodoMiddleware from './../../store/middlewares/todoMiddleware'




function mapStateToProps(state) {
    console.log(state.addItems.todos)
    console.log(state.addItems.editState)
    console.log(state.addItems.editVal)
    return {
        items: state.addItems.todos,
        editState: state.addItems.editState,
        editVal: state.addItems.editVal,
        // decCounter: state.decrementCounter.decrementState
    };
}


function mapDispatchToProps(dispatch) {
    return {
        add: function (value) {
            return dispatch(ItemsAction.addItemsWithValue(value));
        },
        removeAll: function () {
            return dispatch(ItemsAction.removeAll());
        },
        remove: function (key) {
            return dispatch(ItemsAction.removeItem(key));
        },
        closeEdit: function () {
            return dispatch(ItemsAction.closeEdit());
        },
        openEdit: function (key) {
            return dispatch(ItemsAction.openEdit(key));
        },
        updateItem: function (item) {
            return dispatch(ItemsAction.updateItem(item));
        },


    };
}

class Home extends Component {


    addItem(item) {
        this.props.add(item);
    }
    removeItems() {
        this.props.removeAll();
    }
    removeItem(key) {
        this.props.remove(key);
    }
    closeEdit() {
        this.props.closeEdit();
    }
    openEdit(key) {
        this.props.openEdit(key);
    }
    updateItem(item) {
        this.props.updateItem(item);
    }

    render() {
        return (
            <div>
                <TodoList updateItem={this.updateItem.bind(this)}
                    editVal={this.props.editVal}
                    closeEdit={this.closeEdit.bind(this)}
                    editState={this.props.editState}
                    update={this.addItem.bind(this)}
                    removeAll={this.removeItems.bind(this)}
                    openEdit={this.openEdit.bind(this)}
                    items={this.props.items}
                    removeItem={this.removeItem.bind(this)} />





                {/* <TodoItems openEdit={this.openEdit.bind(this)} items={this.props.items} removeItem={this.removeItem.bind(this)} /> */}
            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
