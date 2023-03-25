import { useContext } from 'react'
import ModalLogin from '../../component/modalLogin/ModalLogin'
import MovieCard from '../../component/movieCard/MovieCard'
import { MovieContext } from '../../context/MovieContext'
import './Home.css'

const Home = () => {
  const {movie } =useContext(MovieContext)
    
 
  return (
    <div className='movieContainer' >
    <MovieCard/>
    {/* <ModalLogin/> */}
    </div>
  )
}

export default Home