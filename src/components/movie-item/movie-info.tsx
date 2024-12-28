import type {Movie} from 'src/consumer'

type MovieInfoProps = {
  readonly movie: Movie
}

export default function MovieInfo({movie}: MovieInfoProps) {
  return (
    <div data-cy="movie-info-comp">
      <h2>{movie.name}</h2>
      <p>ID: {movie.id}</p>
      <p>Year: {movie.year}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  )
}
