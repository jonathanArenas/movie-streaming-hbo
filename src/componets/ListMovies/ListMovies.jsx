import React from 'react'
import CardMovie from '../CardMovie/CardMovie'
const ListMovies = ({data}) => {
  return (
    <div>
        {data.map(item => (
                <li className='col-5 col-md-3 col-lg-3 ms-auto' key={item._id}>
                <Link to={`/movie/${item._id}`}>
                  <CardMovie {...item} />
                </Link>
              </li>
        ))}
    </div>
  )
}

export default ListMovies