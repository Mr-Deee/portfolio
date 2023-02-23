import { useState } from "react";


const Create = ()=>{



    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
  
    return (
        <div className="create">
            <h2>Add a New  Blog</h2>

            <form>
            <label>Blog title:</label>
            <input 
            type= "text"
            required  
          value={title}
          onChange={(e) => setTitle(e.target.value)}
            
            />


<label>Blog body:</label>
            <textarea 
             required
             value={body}
             onChange={(e) => setBody(e.target.value)}
           />
             <textarea/>


<label>Blog author:</label>
            <select>
                <option value = 'D|N'>D|N</option>
                value={author}
                onChange ={(e)=> setAuthor()}
                {/* <option value = 'N'>|</option>
                <option value = 'N'>N</option> */}
           
           </select>
           <button></button>




            </form>



        </div>

);
}

export default Create;