import { useState, useEffect } from 'react'

export function useFetchProducts () {
  const [products, setProductos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(json => {
        setProductos(json)
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Error fetching products:', error)
        setError(error)
        setIsLoading(false)
      })
  }, [])

  return { products, isLoading, error }
}
