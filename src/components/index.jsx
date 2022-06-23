import React, { Fragment, useState, useEffect } from "react";
import { GET_ALL_CHARACTERS } from "../graphql/charactersRickAndMorty";
import { useLazyQuery } from "@apollo/client";
import ListCharacters from "./ListCharacters";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Pagination from '@mui/material/Pagination';

const CharactersRickAndMorty = () => {

  const [getListCharacters, { loading, error, data }] = useLazyQuery(GET_ALL_CHARACTERS);

  const [page, setPage] = useState(1);

  useEffect(() => {
    showListCharacters(1);
  }, []);

  const showListCharacters = async (page) => {
    await getListCharacters({ variables: { pageData: page } });
  }

  const handlePage = (event, value) => {
    setPage(value);
    showListCharacters(value);
  }

  return (
    <div className="App">

      {loading ? <Box sx={{ width: '100%' }}>
        <LinearProgress color="primary" />
      </Box> : null}

      {data ?
        <Fragment>
          <ListCharacters characters={data.characters.results} />
          <br />
        </Fragment> : null
      }

      {data ?
        <Pagination onChange={handlePage} page={page} style={{ color: 'white', display: 'flex', justifyContent: 'center' }} count={data.characters.info.pages} color="primary" size="large" /> : null
      }

      {error ? <h1>Ha ocurrido un error consultando la serie Rick y Morty</h1> : null}

    </div>
  );
}

export default CharactersRickAndMorty;

