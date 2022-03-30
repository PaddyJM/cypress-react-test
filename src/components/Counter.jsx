import React, {useState} from "react";
import Button from "./ui-kit/Button";

export default function Counter() {
    const [count, setCount] = useState(0);
    return (<>
        <h2 className="counter">{count} times clicked</h2>
        <Button className="counter" onClick={() => setCount(count + 1)}>Add 1</Button>
    </>);
}