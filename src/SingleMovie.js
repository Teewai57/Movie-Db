import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'
import useFetch from './useFetch'


const SingleMovie = () => {
    const { id } = useParams()
    const { isLoading, error, data:movie } = useFetch(`&i=${id}`)


    if (isLoading) {
        return <div className='loading'></div>
      }
      if (error.show) {
        return (
          <div className='page-error'>
            <h1>{error.msg}</h1>
            <Link to='/' className='btn'>
              back to movies
            </Link>
          </div>
        )
      }
  return <h2>single movie</h2>
}

export default SingleMovie
