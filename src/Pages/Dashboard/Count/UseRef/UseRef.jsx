import React, {useState, useEffect, useRef} from 'react'

export default function UseRef() {
    const [count, setCount] = useState(0);
    const countRef = useRef(count);
    console.log(countRef.current);

    useEffect(() => {
        countRef.current = count;
    })
    
    return (
        <div>
            <h1>UseRef</h1>
            <p>You Clicked Count is {count}</p>
            <button onClick={(e) => setCount(count +1)}>Add 1!</button>
            <button onClick={(e) => setCount(count +2)}>Add 2!</button>
            <button onClick={(e) => setCount(count +3)}>Add 3!</button>
        </div>
    )
}
