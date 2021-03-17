import { MovieCard } from './MovieCard';
import MovieProps from '../models/Movie'

type Props = {
  movies: MovieProps[]
}

export function Content({ movies }: Props) {
  return (
    <main>
        <div className="movies-list">
          {movies.map((movie, index) => (
            <MovieCard 
              title={movie.Title} 
              poster={movie.Poster} 
              runtime={movie.Runtime} 
              rating={movie.Ratings[0].Value} 
              key={index}  
            />
          ))}
        </div>
    </main>
  )
} 