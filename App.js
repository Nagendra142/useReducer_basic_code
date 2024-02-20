import React,{useReducer} from 'react';

const reducer=(State,action)=>{

  if(action.type==="Delete"){
    const New_data=State.data.filter((child,index)=>{
        return index!==action.payload;
    })
    return {
        ...State, //It is for coping remaining all data,if we not specify this data will disapper.must in useReducer function.
        data:New_data
    }
}
return State;
        
}

export const App=()=>{

    //It is initial state what in useReducer it contains all States of field there no need to take the multiple useState to update and state values
   const initialState ={
    data : [
        {name:"nagendra",age:21,username:"nag"},
        {name:"mahi",age:22,username:"mah"}
    ],
    length:2
}
    const [State,dispatch]=useReducer(reducer,initialState);


    //when the click button calls the function then it calls the dispatch,
    //the dispatch with type and payload go to the reducer function which have implementation 
    //we must place return state in reducer function otherwise it will collapse application.
    const Delete_handle=(id)=>{
        dispatch({
            type:"Delete",
            payload:id
        })
    }

    const Edit_handle=(id)=>{
        dispatch({
            type:"Edit",
            payload:id
        })
    }

    return (
        <li>
            {
                State.data.map((child,index)=>{
                    return <div key={index}>
                        <h2>{child.name}</h2>
                        <h2>{child.username}</h2>
                        <h2>{child.age}</h2>
                        <button onClick={()=>Delete_handle(index)}>Delete</button>
                        <button onClick={()=>Edit_handle(index)}>Edit</button>
                        </div>

                })
                
            }
            
                <h2>{State.length}</h2>
            
        </li>
    )
}