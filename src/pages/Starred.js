import React, { useEffect, useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config';
import { useShows } from '../misc/custom-hooks';

const Starred = () => {
  const [starred] = useShows();
  const [shows, setShow] = useState(null);
  const [isLoding, setIsLoding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map(showId => apiGet(`/shows/${showId}`));
      Promise.all(promises)
        .then(apiData => apiData.map(show => ({ show })))
        .then(results => {
          setShow(results);
          setIsLoding(false);
        })
        .catch(err => {
          setError(err.message);
          setIsLoding(false);
        });
    } else {
      setIsLoding(false);
    }
  }, [starred]);

  return (
    <MainPageLayout>
      {isLoding && <div>Shows are Still Loading</div>}
      {error && <div>Error Occured: {error}</div>}
      {!isLoding && !shows && <div>No Shows were Added</div>}
      {!isLoding && !error && shows && <ShowGrid data={shows} />}
    </MainPageLayout>
  );
};

export default Starred;
