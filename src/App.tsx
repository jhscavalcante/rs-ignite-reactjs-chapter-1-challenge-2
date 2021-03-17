import { useEffect, useState } from 'react';
import { default as GenreResponseProps } from './models/Genre'
import { default as MovieProps } from './models/Movie'
 
import { SideBar } from './components/SideBar';
import { Header } from './components/Header';
import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <SideBar genres={genres} setSelectedGenreId={setSelectedGenreId} selectedGenreId={selectedGenreId}/>

      <div className="container">
        <Header title={selectedGenre.title} />
        <Content movies={movies} />
      </div>
    </div>
  )
}