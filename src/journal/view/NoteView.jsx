import { SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { useEffect, useMemo, useRef } from "react";
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


  const inputFile = useRef();

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

  const onFileInputChange = ({ target }) => {
    
    if( target.files === 0 ) return;
    
    console.log('file change', target.files)
    // dispatch( startUploading() )
    //

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

        <input type="file" accept="image/*" multiple onChange={ onFileInputChange } style={{ display: 'none' }} ref={inputFile} />

        <IconButton color="primary" disabled={ isSaving } onClick={ () => inputFile.current.click() } >
          <UploadOutlined />
        </IconButton>

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
