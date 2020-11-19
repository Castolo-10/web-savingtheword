import getUrl from '../components/getUrl'

export default function Logout() {
  localStorage.setItem('IdUsuario', null);
  localStorage.setItem('confirmado', null);
  localStorage.setItem('id_tv', null);
  localStorage.setItem('id_series_movies', null);
  localStorage.setItem('id_id_homework', null);
  localStorage.setItem('id_study', null);
  localStorage.setItem('id_reading', null);
  localStorage.setItem('id_play_videogames', null);
  localStorage.setItem('id_sleep', null);
  localStorage.setItem('id_excersise', null);
  localStorage.setItem('id_physical_games', null);
  localStorage.setItem('id_non_physical_games', null);
  localStorage.setItem('id_social_networks', null);
  localStorage.setItem('id_art_activities', null);

  localStorage.setItem('tv', null);
  localStorage.setItem('series_movies', null);
  localStorage.setItem('homework', null);
  localStorage.setItem('study', null);
  localStorage.setItem('reading', null);
  localStorage.setItem('play_videogames', null);
  localStorage.setItem('sleep', null);
  localStorage.setItem('excersise', null);
  localStorage.setItem('physical_games', null);
  localStorage.setItem('non_physical_games', null);
  localStorage.setItem('social_networks', null);
  localStorage.setItem('art_activities', null);

  localStorage.setItem('game_data', null);
  localStorage.setItem('game_time', null);
  localStorage.setItem('game_errors', null);
  localStorage.setItem('game_level', null);

  window.location = getUrl();
}
