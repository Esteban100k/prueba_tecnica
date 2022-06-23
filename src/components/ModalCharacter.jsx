import React, { Fragment, useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

const ModalCharacter = ({ openModal, handleClose, loading, character }) => {

    return (
        <Fragment>
            <Dialog
                fullWidth={true}
                maxWidth={"md"}
                open={openModal}
                onClose={handleClose}
            >
                <DialogContent>
                    <Box sx={{ flexGrow: 1 }}>
                        {
                            loading ? <CircularProgress style={{ display: 'flex', justifyContent: 'center' }} /> : <Fragment>
                                {character != null ? <Grid container spacing={2} columns={16}>
                                    <Grid item xs={4}>
                                        <img src={character.image} alt="Nature" style={{ width: '100%', height: 'auto' }} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="h4">
                                            {character.name}
                                        </Typography>
                                        <Typography variant="h6">
                                            <span><b>Status: </b>{character.status}</span> <br />
                                            <span><b>Specie: </b>{character.species}</span> <br />
                                            <span><b>Gender: </b>{character.gender}</span> <br />
                                            <span><b>Origin: </b>{character.origin.name}</span> <br />
                                            <span><b>Location: </b>{character.location.name}</span> <br />
                                        </Typography>
                                    </Grid>
                                </Grid> : null}
                            </Fragment>
                        }
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}

export default ModalCharacter;
