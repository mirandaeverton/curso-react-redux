import { useEffect, useState } from "react"

const useFetchJson = (url, method = 'get') => {
    const [response, setResponse] = useState({
        data: null,
        loading: true
    })

    useEffect(() => {
        setTimeout(() =>
            fetch(url, { method })
                .then(resp => resp.json())
                .then(json => setResponse({
                    data: json,
                    loading: false
                }))
            , 2000)
    }, [url, method])

    return response
}

export default useFetchJson