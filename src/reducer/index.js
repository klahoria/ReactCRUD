import {LOGIN,REGISTER,UPLOADFILE,MESSAGECLOSE,FILESIZENMESSAGE,SELECTSAVEACTION,UPDATESELECT,CRUDSAVE,LOGOUT,GETLISTING} from '../actionCreater/type'
var initionstate={
  msgstatus:false,
  color:null,
  message:null,
  title:null,
  userary:null,
  token:null

}
const reducer=(state=initionstate,action)=>{
  switch(action.type){
    case REGISTER:{
      return {...state,msgstatus:true,color:'green',message:"You application has been submitted",title:"Successfully saved"}
    }
    case LOGIN:{
      // console.log(action.payload.data)
      return {...state,msgstatus:true,color:action.payload.color,message:action.payload.message,title:action.payload.title,token:action.payload.data}
    }
    case MESSAGECLOSE:{
      return {...state,msgstatus:false}    
    }
    case FILESIZENMESSAGE:{
      return {...state,msgstatus:true,color:'red',message:"Image size is too large",title:"Large image size"}    
    }    
    case UPLOADFILE:{
      return {...state,msgstatus:false,color:action.payload.color,message:action.payload.message,title:action.payload.title,data:action.payload.data}  
    }
    case SELECTSAVEACTION:{      
      return {...state,msgstatus:false,color:action.payload.color,message:action.payload.message,title:action.payload.title,data:action.payload.data}  
    }
    case UPDATESELECT:{      
      return {...state,msgstatus:false,color:action.payload.color,message:action.payload.message,title:action.payload.title,data:action.payload.data}
    }
    case CRUDSAVE:{      
      return {...state,msgstatus:true,color:action.payload.color,message:action.payload.message,title:action.payload.title,data:action.payload.data}
    }
    case LOGOUT:{      
      return {...state,token:null,msgstatus:true,message:'Successfully logout',title:"session expired",color:"red"}
    }
    case GETLISTING:{      
      return {...state,msgstatus:false,color:action.payload.color,message:action.payload.message,title:action.payload.title,data:action.payload.data}
    }
    default:
    // console.log(state,"***")
    return state;
  }
}
export default reducer;