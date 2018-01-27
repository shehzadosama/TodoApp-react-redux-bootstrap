import ItemsAction from "./../actions/Items";

//Update in counter 13 -- create Middleware
export default class TodoMiddleware {

    //Update in counter 13 -- This function will be called 
    static asynAdd(data) {
        console.log("test ",data);
        return (dispatch) => {
            // My Business logic Here
            data = data * 2;
            dispatch(ItemsAction.addItemsWithValue(data))
        }
    }

    

   




    
}


    
