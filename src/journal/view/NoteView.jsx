import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import { ImgGallery } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../shared/hooks/useForm";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startSaveNotes } from "../../store/journal/thunks";

export const NoteView = () => {

  const dispatch =  useDispatch();

  const  { active:note, messageSaved, isSaving } = useSelector(state =>  state.journal); 

  const { body, title, date, onInputChange, formState } =  useForm( note);

  const dateString = useMemo(() => { 
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  useEffect(() => { 
    dispatch( setActiveNote(formState))
  },[ formState ])

  useEffect(() => {
    if(messageSaved.length > 0) { 
      alert(messageSaved)
    }
  }, [messageSaved])
  


  const onSaveNote = () => { 
    dispatch(startSaveNotes())
  }



  return (
    <Grid
      container      
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">          
          {dateString}
        </Typography>
      </Grid>

      <Grid item>
        <Button color="primary" sx={{ padding: 2 }} onClick={onSaveNote} disabled={ isSaving } >
          <SaveOutlined
            sx={{
              fontSize: 30,
              mr: 1,
            }}
          />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un titulo"
          label="Titulo"
          sx={{ border: "none", mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="Que suce hoy?"
          label="Titulo"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>

      {/* galeria de imagenes  */}
      <ImgGallery />
    </Grid>
  );
};
