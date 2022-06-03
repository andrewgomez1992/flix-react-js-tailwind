import React, { useState, useEffect } from 'react'
import requests from '../Requests'
import axios from 'axios'

const Main = () => {

    const [movies, setMovies] = useState([])

    // taking a movie and picking a random one each time :)
    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        axios.get(requests.requestPopular)
            .then(res => {
                setMovies(res.data.results)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    console.log(movie)

    return (
        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full'>
                <img src="" alt={movie?.title} />
            </div>
        </div>
    )
}

export default Main