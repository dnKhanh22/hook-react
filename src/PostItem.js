import React from 'react';
 
function PostItem(props){

    console.log(props.title);
    return(
        <div className='post-item'>
            <img
                src={props.image}
                alt={props.title}
            />
            <h1 className='post-title'>{props.title}</h1>
            <p className='post-text'>{props.description}</p>

        </div>
    )
}

export default PostItem;