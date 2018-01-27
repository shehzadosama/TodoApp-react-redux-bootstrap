// Update in Counter 8 -- Separate action file as class
export default class Items {

    // static properties to be used in reducer for switch cases
    static ADD = "ADD_ITEMS";
    static REMOVE = "REMOVE_ITEM";
    static REMOVE_ALL = "REMOVE_ITEMS";
    static CLOSE_EDIT = 'CLOSE_EDIT';
    static OPEN_EDIT = 'OPEN_EDIT';
    static UPDATE_ITEM = 'UPDATE_ITEM';
    // static TOGGLE_EDIT = 'TOGGLE_EDIT';
    // static functions to be mapped with dispatch in component
    static addItemsWithValue(value) {
        return {
            type: 'ADD_ITEMS',
            val: value
        }
    }
    static removeAll() {
        return {
            type: 'REMOVE_ITEMS'

        }
    }
    static removeItem(key) {
        return {
            type: 'REMOVE_ITEM',
            keys: key
        }
    }
    static openEdit(key) {
        return {
            type: 'OPEN_EDIT',
            keys: key
        }
    }
    static closeEdit() {
        return {
            type: 'CLOSE_EDIT',
            // keys: key
        }
    }
    static updateItem(item) {
        return {
            type: 'UPDATE_ITEM',
            val: item
        }
    }

}