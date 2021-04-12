import React, { useEffect, useReducer } from 'react';
import '../toast and loading/Loading/loading.css';
import LoadingIndex from './Loading/LoadingIndex';
import Toast from './Toast/Toast';



const initState = {
    toast: { type: 'info', message: '' },
    body: '',
    postId: 1,
    loading: true
}


const actionTypes = {
    GET_POST_SUCCESS: 'get-post-success',
    GET_POST_REQUEST: 'get-post-request'
}


function userAction(state, action) {
    switch (action.type) {
        case actionTypes.GET_POST_SUCCESS:
            return {
                ...state,
                toast: { type: 'success', message: action.message },
                body: action.body,
                loading: false
            }
        case actionTypes.GET_POST_REQUEST:
            return {
                ...state,
                postId: action.postId,
                loading: true
            }  
        default:
            break;
    }
}



export default function Loading() {
    const [{toast, body, postId, loading}, dispatch]= useReducer(userAction, initState);


    // const [toast, setToast] = useState({type: 'info', message:''})
    // const [title, setTitle] = useState('');
    // const [postId, setPostId] = useState(1);
    // const [loading, setLoading] = useState(false);




    // function userAction(type, playLoad) {
    //     switch (type) {
    //         case 'get-post-success':
    //             setTitle(playLoad.body)
    //             setLoading(false)
    //             setToast({type: 'success', message: playLoad.message})
    //             break;
    //         case 'get-post-request':
    //             setPostId(playLoad);
    //             setLoading(true);
    //             break;    
    //         default:
    //             break;
    //     }
    // }




    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            dispatch({
                type: actionTypes.GET_POST_SUCCESS,
                body: post.body,
                message: `Post with id ${postId} loaded`
            })


            // userAction('get-post-success', {
            //     body: post.body,
            //     message: `Post with id ${postId} loaded`
            // })

            // setTitle(post.body)
            // setLoading(false)
            // setToast({type: 'success', message:`Post with id ${postId} loaded`})
        })

    }, [postId]);


    function handleLoading(e) {

        dispatch({
            type : actionTypes.GET_POST_REQUEST,
            postId: e.target.value
        })


        // userAction('get-post-request', e.target.value);
        // setPostId(e.target.value);
        // setLoading(true);
    }


    return (
        <div>
        <h1>Toast And Loading (useReduser)</h1>
        <br/>
        <div>
            <label>Post Id : </label>
            <input type="number" value={postId} onChange={handleLoading}/>
        </div>
        <div>
            {loading ? <LoadingIndex /> : <h3>{body}</h3>}
        </div>
        <Toast type={toast.type} message={toast.message}/>
        </div>
    )
}
