import React, {useState, useEffect} from 'react'

export default function Count() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    useEffect(() => {
        document.title = `You Clicked ${count} times`;
    })

    return (
        <div>
            <h1>Count</h1>
            <p>You Clicked {count}</p>
            <input type="number" value={step} onChange={(e) => setStep(parseInt(e.target.value))}/>
            <button onClick={(e) => setCount(count + step)}>Click</button>
        </div>
    )
}
