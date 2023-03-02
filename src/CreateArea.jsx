import React,{useState} from "react";
// import AddIcon from "@material-ui/icons/Add";
// import Fab from "@material-ui/core/Fab";
// import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
    const [note, setNote] = useState({
        title:"",
        content:""
    });
    

    function handleChange(event){
        const{value, name} = event.target;
        setNote(prevValue=>{
            return{
                ...prevValue,
                [name]: value
            }
        })
        
    }
    function submitNote(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
        event.preventDefault();
    }
   
  return (
    <div>
      <form className="create-note">
        <input 
        name="title" 
        placeholder="Title" 
        value={note.title}
        onChange={handleChange}
        />
        <textarea 
        name="content" 
        placeholder="Take a note..." 
        rows="3" 
        value={note.content}
        onChange={handleChange}
        />
        <button disabled={!note.title}onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
