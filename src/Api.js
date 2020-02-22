import React, { useEffect, useState, useRef } from "react";
import Axios from "axios";

export default function API() {
  const [apiData, setApiData] = useState([]);
  const [query, setQuery] = useState("react hooks");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const searchInputRef = useRef();

  // If u pass [] as a parameter to useEffect method then useEffect method run only when
  // Component mount or unmount

  useEffect(() => {
    // Axios.get("http://hn.algolia.com/api/v1/search?query=reacthooks").then(
    //   res => {
    //     console.log(res.data);
    //     setApiData(res.data.hits);
    //   }
    // );

    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
        const apiData = await Axios.get(
            `http://hn.algolia.com/api/v1/search?query=${query}`
          );
          setApiData(apiData.data.hits);
    }catch(error){
        setError(error)
    }
 
   
    setLoading(false);
  };

  const setQueryData = event => {
    setQuery(event.target.value);
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    getData();
  };

  const handleClearSearch = () => {
    setQuery("");
    console.log(searchInputRef.current.value);
    searchInputRef.current.focus();
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          onChange={event => setQueryData(event)}
          value={query}
          ref={searchInputRef}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={handleClearSearch}>
          Clear
        </button>
      </form>
      {loading ? (
        <h4>Data Loading ...</h4>
      ) : (
        <ul>
          {apiData.map(data => (
            <li key={data.objectId}>
              <a href={data.url}>{data.title}</a>
            </li>
          ))}
        </ul>
      )}
      {error && <div>{error.message}</div>}
    </>
  );
}
