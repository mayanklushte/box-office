import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';
// children layout
// we wrap MainPageLayout Component arrond the content of page
// this act as children in javascript and then we can grab this in mainPageLaout.js
// We use this to control template inheritance kind thing in react
// this how we should manage layouts in react

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const isShowOption = searchOption === 'shows';
  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then(result => {
      setResults(result);
    });
  };

  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>;
    }

    if (results && results.length > 0) {
      return results[0].show
        ? results.map(item => <div key={item.show.id}>{item.show.name}</div>)
        : results.map(item => (
            <div key={item.person.id}>{item.person.name}</div>
          ));
    }

    return null;
  };

  // onkey down is function where we check which key is press using javascript keycode
  // on chnage will handle change of element and {input} is used to set useState element to input box

  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="Search for Somthing"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />

      <div>
        <label htmlFor="show-search">
          Shows
          <input
            id="show-search"
            type="radio"
            value="shows"
            checked={isShowOption}
            onChange={onRadioChange}
          />
        </label>
        <label htmlFor="actors-search">
          Actors
          <input
            id="actors-search"
            type="radio"
            value="people"
            checked={!isShowOption}
            onChange={onRadioChange}
          />
        </label>
      </div>
      <button type="button" onClick={onSearch}>
        Search
      </button>

      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
