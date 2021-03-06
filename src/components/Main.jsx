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
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // console.log(movie)

    // truncating movie overview to only be a particular amount of characters 
    const truncateString = (string, number) => {
        if (string?.length > number) {
            return string.slice(0, number) + '...'
        } else {
            return string
        }
    }

    return (
        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
                <img
                    className='w-full h-full object-cover shadow-md shadow-violet-600'
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={movie?.title}
                />
                <div className='absolute w-full top-[20%] p-4 md:p-8'> {/** Play and Watch Later buttons set */}
                    <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                    <div className='my-4'> {/** margin added to buttons */}
                        <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5 rounded'>Play</button>
                        <button className='border text-white border-gray-300 py-2 px-5 ml-4 rounded'>Watch Later</button>
                    </div>
                    <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
                    <p className='w-full md:max-w-[70%] lg-max-w-[50%] xl:max-w-[35%] text-gray-200'>
                        {truncateString(movie?.overview, 150)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main