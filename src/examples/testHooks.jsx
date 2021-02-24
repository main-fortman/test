import React, {useState, useEffect} from 'react';

export function TestState() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = "Clicked: " + count;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    );
} 