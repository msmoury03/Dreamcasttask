import axios from 'axios'



export const fetchusers = ()=>{
    return async function(dispatch){

        const res = await axios.get('https://jsonplaceholder.typicode.com/users')

      

        dispatch(setBasic(res.data));
       
    }
}






export const setBasic = (data = null) => {
    if (data) {
        return {
            type: "SET_BASIC",
            payload: data,
        };
    }

    return {
        type: "SET_BASIC",
        payload: [],
    };
};


