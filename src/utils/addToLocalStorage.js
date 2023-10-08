

export default function addToLocalStorage (value){
    localStorage.setItem("authorization", JSON.stringify(value));
}