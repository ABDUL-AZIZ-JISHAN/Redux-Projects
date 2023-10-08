export default function clearLocalStorage (value){
    localStorage.removeItem(value || "authorization");
}