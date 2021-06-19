export const endpoint="https://accounts.spotify.com/authorize";
const redirect_uri="http://localhost:3000/";
const client_id="0bd7e8b9ffa841fe9327a76097425c1b";

const scopes=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]

export const getAccessToken =()=>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item)=>{
        let parts=item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial
    },{});
}
export const loginURL=`${endpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes.join("%20")}&response_type=token&show_dailog=true`;
