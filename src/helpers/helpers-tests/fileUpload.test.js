import { v2 as cloudinary } from 'cloudinary'
import { fileUpload } from "../fileUpload";

cloudinary.config({ 
    cloud_name: 'dbumluo1v',
    api_key: '264226113318922',
    api_secret: 'C90AOpTlarIFF3awNFNUQIY1wMM',
    secure: true
})

describe('Pruebas en  fileUpload', () => { 

    test('debe de subir un archivo', async () => {
        
        const imageUrl = 'https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Teaser/html-img.jpg';
        const resp =  await fetch( imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload(file);
        expect( typeof url ).toBe('string');

        // console.log(url);
        // https://res.cloudinary.com/dbumluo1v/image/upload/v1716248302/journal/zklggu5ndcwjus1teqgx.jpg
        /**
         * quitar la / y despues quedarme con solo el id: zklggu5ndcwjus1teqgx
         */
        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.jpg', '');
        console.log(imageId, 'sda');
        const respCloudinary =  await cloudinary.api.delete_resources(['journal/' + imageId], { 
            resource_type: 'image'
        });

        // console.log({ respCloudinary });

    });

    test('debe de retornar null', async () => { 

        const file = new File([], 'foto.jpg');
        const url = await fileUpload(file);
        expect( url ).toBe( undefined );

     })

 })