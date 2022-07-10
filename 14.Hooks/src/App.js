import React, { Component, useState } from 'react'

// export default function App() {
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//       <p>计数器：{count}</p>
//       <button onClick={() => setCount(count + 1)}>+1</button>
//       <button onClick={() => setCount(count - 1)}>-1</button>
//     </div>
//   )
// }

export default function Movies() {
  const [movies, setMovies] = useState([
    {
      name: '复仇者联盟',
      favFigure: '美国队长',
      likeCount: 100
    },
    {
      name: '复仇者联盟2',
      favFigure: '钢铁侠',
      likeCount: 1000
    },
    {
      name: '复仇者联盟3',
      favFigure: '灭霸',
      likeCount: 10000
    }
  ])
  function incrementLikeCount(index) {
    const newMovies = [...movies]
    newMovies[index].likeCount += 1
    setMovies(newMovies)
  }
  return (
    <div>
      <ul>
        {movies.map((movie, index) => {
          return (
            <li key={movie.name}>
              <span>{movie.name} </span>
              <span>{movie.favFigure} </span>
              <span>
                {movie.likeCount}
                <button onClick={() => incrementLikeCount(index)}>喜欢 +1</button>
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
