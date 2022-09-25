import React from 'react'
import { useGetBannerQuery } from './services/pokemon'

export default function App() {
  const { data, error, isLoading } = useGetBannerQuery()
  
  return (
    <div className='App'>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{JSON.stringify(data)}</h3>
        </>
      ) : null}
    </div>
  )
}
