import { useState } from "react"

const useCounter = (initialCount = 0) => {
    const [count, setCount] = useState(initialCount)

    const dec = () => {
        setCount(curr => curr - 1)
    }
    const inc = () => {
        setCount(curr => curr + 1)
    }

    return { count, inc, dec }
}

export default useCounter