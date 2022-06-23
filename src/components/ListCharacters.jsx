import React, { Fragment, useState } from "react";
import CharacterCard from './CharacterCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const ListCharacters = ({ characters }) => {
    return (
        <Fragment>
            <Typography style={{ textAlign: 'center' }} variant="h3" gutterBottom component="h3">
                Rick and Morty Characters
            </Typography>
            <Box>
                <Grid container spacing={3}>
                    {characters.map(character =>
                        <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="center" key={character.id} item md={3}>
                            <CharacterCard
                                id={character.id}
                                name={character.name}
                                image={character.image}
                            />
                        </Grid>
                    )}
                </Grid>
            </Box>
        </Fragment>
    );
}

export default ListCharacters;
