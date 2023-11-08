import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'api';
import { TrendingList } from 'components/TrendingList/TrendingList';

export default function Home() {
  const [trendingList, setTrendingList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (trendingList.length) {
      return;
    }
    async function getTrendingMovie() {
      try {
        setError(false);
        const trendingMovies = await fetchTrendingMovies();
        setTrendingList(trendingMovies.results);
      } catch (error) {
        setError(true);
      }
    }

    getTrendingMovie();
  }, [trendingList]);

  return (
    <div>
      <h2>Trending today</h2>
      {trendingList.length > 0 && <TrendingList trendingList={trendingList} />}
      {error && <div>Error!</div>}
    </div>
  );
}
