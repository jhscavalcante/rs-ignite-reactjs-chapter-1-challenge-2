import Genre from '../models/Genre'
import { Button } from './Button';

type Props = {
  genres: Genre[],
  setSelectedGenreId: (id: number) => void,
  selectedGenreId: number
}

export function SideBar({ 
  genres, 
  setSelectedGenreId, 
  selectedGenreId } : Props 
){
  
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
  <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          id={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
          key={genre.id}
        />
      ))}
    </div>
  </nav>
  )
}