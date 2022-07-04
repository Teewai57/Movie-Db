import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'
import useFetch from './useFetch'


const SingleMovie = () => {
    const { id } = useParams()
    const { isLoading, error, data:movie } = useFetch(`&i=${id}`)
  return <h2>single movie</h2>
}

export default SingleMovie
