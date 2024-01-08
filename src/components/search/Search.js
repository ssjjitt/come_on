// здесь устанавливаем переменные состояния для управления параметрами поиска, параметрами запроса и результатами поиска.
import React, { useState, useEffect } from "react";
import { discogs } from "../../api/discogs";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

function Search() {
  const [searchParams, setSearchParams] = useState({});
  const [queryParams, setQueryParams] = useState();
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = ({ target }) => { // обновление параметров поиска в состоянии при каждом изменении инпутов
    setSearchParams((prevParams) => {
      return {
        ...prevParams,
        [target.id]: target.value,
      };
    });
  };

  const handleSearch = (e) => { // строит параметры запроса на основе параметров поиска и запускает поиск
    let params = "";
    for (const [param, value] of Object.entries(searchParams)) {
      if (value) {
        params += `${param}=${encodeURIComponent(value)}&`;
      }
    }
    setQueryParams(params);
  };

  useEffect(() => { // будет срабатывать при каждом изменении queryParams(фактический поиск API)
    if (queryParams) {
      discogs
        .search(queryParams)
        .then((jsonResponse) => setSearchResults(jsonResponse.results));
    }
  }, [queryParams]);

  return (
    <>
      <SearchBar handleChange={handleChange} handleSearch={handleSearch} />
      {searchResults &&
        searchResults.map((result) => (
          <SearchResult
            id={result.id}
            src={result.cover_image}
            title={result.title}
            year={result.year}
            catNo={result.catno}
            path={`/discography/${result.id}`}
          />
        ))}
    </>
  );
}

export default Search;
