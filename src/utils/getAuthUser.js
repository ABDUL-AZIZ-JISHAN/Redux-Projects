export default function getAuthUser (){
    const auth = localStorage.getItem("authorization");
    return JSON.parse(auth);
}