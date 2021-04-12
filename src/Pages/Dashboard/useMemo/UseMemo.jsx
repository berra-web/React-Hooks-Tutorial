import React, { useState, useMemo } from 'react'

export default function UseMemo() {
    const[counter1, seCounter1] = useState(0);
    const[counte2, seCounter2] = useState(0);
    
    function wordCount(word) {
        let i = 0;
        do {
            i++
        } while (i <= 999999999);
        return word.length;
    }

    const count = useMemo(() => wordCount('Memo'), []);


    return (
        <div>
            <h1>UseMemo And Callback</h1>
            <div>
                <p>Word Count : {count}</p>
                <p>Click Counter 1 : {counter1}</p>
                <p>Click Counter 2 : {counte2}</p>
                <div>
                    <button onClick={(e) => seCounter1(c => c + 1)}>Increment 1</button>
                    <button onClick={(e) => seCounter1(c => c - 1)}>Decrease 1</button>
                </div>
                <div>
                    <button onClick={(e) => seCounter2(c => c + 1)}>Increment 2</button>
                    <button onClick={(e) => seCounter2(c => c - 1)}>Decrease 2</button>
                </div>
            </div>
        </div>
    )
}
