import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router';

export default function AddItem() {
    
    const dispatch = useDispatch();
    const history = useHistory();
    
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    const item = {
        description: description,
        image_url: url
    } // end item

    const handleSubmit = () => {

        // send 
        dispatch({
            type : 'POST_ITEMS',
            payload : item
        })
        
        setDescription('');
        setUrl('');
    } // end handleSubmit
    
    
    const handleCancel = () => {
        history.push('/shelf');
    }// end handleCancel

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type = "text" placeholder="Description"
            onChange={(event) => setDescription(event.target.value)}
            value={description}/>
            <input type="text" placeholder="Image URL"
            onChange={(event) => setUrl(event.target.value)}
            value={url}/>
            </form>
            
            
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    )
}
