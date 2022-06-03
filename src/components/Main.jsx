import React, { useState, useEffect } from 'react'
import requests from '../Requests'
import axios from 'axios'

const Main = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(requests.requestPopular)
            .then(res => {
                setMovies(res.data)
                console.log(res)
            })
            .catch(err => {

            })
    }, [])

    return (
        <div>Main</div>
    )
}

export default Main