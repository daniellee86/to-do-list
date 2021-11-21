import {useState} from "react"
import './App.css'


//TO-DO LIST.

const App = () => {
 //STATE   
 const [listItem, setListItem] = useState([])
 const [newItem, SetItem] = useState("") 
 
 //INPUT
const handleChange = (event) => {
   SetItem(event.target.value);
}
//ADD BUTTON
const handleAdd = () => {
    const updatedList = listItem.concat([newItem])
    setListItem(updatedList)
    
}
//REMOVE HANDLER
const removeHandler = index => {
    let removeItem = [...listItem]
    removeItem.splice(index, 1)
    setListItem(removeItem)
}
//WHAT IS BEING RENDERED ON SCREEN
return(
<div id="appContainer">
<div id="navBar">
<h1 className="navText">dOer</h1>
<h2 className="navText">dO more. dO dOer!</h2>
</div>

<div id="display">
<div id="listContainer">   
{listItem.map((listItem, index) => {
    return(
        <div id="listInner" key={index}>
        <p className="doText"> #{index + 1} dO.</p>
        <h2 className="listItem">{listItem}</h2>
        <button className="button" onClick={() => removeHandler (index)}>dOne</button>
        </div>)
 })}
 </div>

<div id="right">
<div id="newItemContainer">
 <h1 id="doText">new dO. new yOu</h1>
 <p>Add your dO below to get started.</p>
 <input id="input" type="text" placeholder="add a dO..."  value={newItem} onChange={handleChange} />
 <button className="button2" type="button" onClick={handleAdd}>dO it!</button>
</div>
<div id="message"></div>

</div>

</div>

</div>
)
}

export default App



