import React, { useState, Fragment } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ModalCharacter from './ModalCharacter';
import { useLazyQuery } from "@apollo/client";
import { GET_CHARACTER_BY_ID } from "../graphql/charactersRickAndMorty";

const CharacterCard = ({
  id,
  name,
  image
}) => {

  const [openModal, setOpenModal] = useState(false);
  
  const [getCharacterById, { loading, error, data }] = useLazyQuery(GET_CHARACTER_BY_ID);

  const handleClickOpen = (id) => {   
    getCharacterById({ variables: { idCharacter: id } });
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Fragment>
      <Card sx={{ maxWidth: 345 }} onClick={() => {handleClickOpen(id)}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image={image}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
            <Typography variant="body3" color="text.secondary">
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <ModalCharacter
        openModal={openModal}
        handleClose={handleClose}
        loading={loading}
        character={data != null && data != undefined ? data.character : null}    
      />

    </Fragment>
  );
}

export default CharacterCard;