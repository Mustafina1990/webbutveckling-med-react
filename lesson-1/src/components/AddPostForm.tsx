import { useState } from "react";

interface AddPostFormProps {
    onAddPost: (title: string) => void;
}

const AddPostForm = ({ onAddPost }: AddPostFormProps) => {

    const [inputPostTitle, setInputPostTitle] = useState("");

    const handleSubmit = (e: React.SubmitEvent) => {
        
        e.preventDefault();

        onAddPost(inputPostTitle);
    
	    setInputPostTitle("");

    }

    return (
        <form onSubmit={handleSubmit}>
			<div className="input-group mb-3">
	             <input 
				type="text" 
				className="form-control" 
				placeholder="I love React!" 
				onChange={(e) => setInputPostTitle(e.target.value)}
				value={inputPostTitle}
				aria-label="What do you want to tell the world?" 
				required/>
                 <button 
				className="btn btn-primary"
                 type="submit"
				> Send it!
				</button>
			</div>
		</form>
    )
}	

export default AddPostForm;      