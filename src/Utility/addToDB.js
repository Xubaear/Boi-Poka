const getStoredBook=()=>{
const storeBookSTR = localStorage.getItem("readList")
if(storeBookSTR){
    const storedBookData = JSON.parse(storeBookSTR)
    return(storedBookData)
}
else{
    return []
}
}

const addToStoreDB =(id)=>{

const storedBookData= getStoredBook()

if(storedBookData.includes(id)){
    alert('yo....')
}else{
    storedBookData.push(id)
const data = JSON.stringify(storedBookData)
localStorage.setItem("readList", data)
}
}
export {addToStoreDB}