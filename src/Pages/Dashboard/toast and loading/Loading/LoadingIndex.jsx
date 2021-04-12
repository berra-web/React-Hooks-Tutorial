import React from 'react';
import loading from '../assets/image/loading.gif';
export default function LoadingIndex() {
    return (
        <div className='loading'>
            <img src={loading} alt="Loading ..."/>
        </div>
    )
};
