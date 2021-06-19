export const  initialState={
    user:null,
    playlists:[],
    weekly_playlist:[],
    playing:false,
    item:null,
    token:null,
    //  token:"BQDtGy4BXDh57vjjU6JlZHC4oUCFC3pLVNOErW4iqNgjAb3Dtdrv7swX2W7lgzTJ2l_kYnSD9EYwgf05AWtvJcHGmQUxdtx2YcdXLIlA_dAuhxda3Wpvne2uC6RedJJs2SdSansXAOb_nlzOdV8EpZcQlbSndz0x4qf8BI1PI7x7yTeQimH7"

}

const reducer=(state,action)=>{

    // Action has two things 1= type 2= [payload]  is something you can name acc to your need and can transfer from one end to the other.
console.log(action);

switch(action.type)
{
    case 'SET_USER':
        return {
            ...state,
            user:action.user
        }
    case 'SET_TOKEN':
            return {
                ...state,
                token:action.token
            }

            case "SET_PLAYING":
                return {
                  ...state,
                  playing: action.playing,
                };
          
              case "SET_ITEM":
                return {
                  ...state,
                  item: action.item,
                };

            case 'SET_WEEKLY':
                return {
                    ...state,
                    weekly_playlist:action.weekly_playlist
                }
        
            case 'SET_PLAYLIST':
                return {
                    ...state,
                    playlists:action.playlists
                }
    default:
        return state;  
}

}

export default reducer;