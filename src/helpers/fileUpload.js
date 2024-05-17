
export const fileUpload = async (file) => {

    if(!file) throw new Error('No hay ningun archivo a subir');

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dbumluo1v/image/upload';

    // para los encabezados de la peticion post,  del Body -> FormData.
    const formData  =  new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {

        const respuesta = await fetch(cloudUrl,  { 
            method: 'POST',
            body: formData
        })

        console.log(respuesta);
        if(!respuesta.ok) throw new Error('No se pudo subir imagen');

        const cloudResp = await respuesta.json();        
        return cloudResp.secure_url;        

    } catch(error) { 
        console.log(error);
        throw new Error(error);
    }

}