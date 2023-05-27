import React from 'react'
import react, { useState } from "react";
import MyInput from './input/MyInput';
import MyButton from './button/MyButton';

function PostForm({ create }) {

    const [post, setPost] = useState({ title: '', body: '' })


    function addNewPost(e) {
        e.preventDefault()
        const newPost = { ...post, id: Date.now() }
        create(newPost)
        setPost({ title: '', body: '' })

    }
    return (
        <form>
            <MyInput type='text'
                placeholder='Название поста'
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
            <MyInput
                value={post.body}
                onChange={(e) => setPost({ ...post, body: e.target.value })}
                type='text' placeholder='Описание поста' />
            <MyButton onClick={addNewPost} >Создать пост</MyButton>
        </form>
    )
}

export default PostForm