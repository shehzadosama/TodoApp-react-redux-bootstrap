import ItemsAction from '../actions/Items'

const INITIAL_STATE = {
  todos: [],
  editState: false,
  editVal: '',
  editKey: ''
}


function addItems(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ItemsAction.ADD:
      // return Object.assign({}, state, {
      //   todos: state.todos.concat({
      //     text: action.val,
      //   })
      // });
      let todos = [...state.todos];
      todos.push(action.val)
      return {
        ...state,
        todos
      }
    case ItemsAction.REMOVE_ALL:
      // return Object.assign({}, state, {
      //   todos: []
      // });
      todos = [...state.todos];
      todos.splice(0)
      return {
        ...state,
        todos
      }
    case ItemsAction.REMOVE:
      todos = [...state.todos];
      todos.splice(action.keys, 1);
      return {
        ...state,
        todos
      };

    case ItemsAction.OPEN_EDIT:
      // return Object.assign({}, state, {
      //   editState: true,
      //   editVal: state.todos[action.keys],
      //   editKey: action.keys
      // });
      return {
        ...state,
        editState: true,
        // editVal: state.todos[action.keys],
        editKey: action.keys
      }
    case ItemsAction.CLOSE_EDIT:
      // return Object.assign({}, state, {
      //   editState: false,
      //   editVal: ''
      // });
      return {
        ...state,
        editState: false,
        editVal: ''
      }
    case ItemsAction.UPDATE_ITEM:
      todos = [...state.todos];
      // todos.splice(action.keys, 1);
      todos[state.editKey] = action.val
      return { todos };
    default:
      return state;
  }
}

export default addItems;