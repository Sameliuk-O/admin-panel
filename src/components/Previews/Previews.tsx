// import { useEffect, useState } from 'react';

import { useAppSelector } from '../../hooks/useAppSelector';
import AIR_FEED from '../../images/air_feed.png';
const Previews = () => {
  const previews = useAppSelector((state) => state.template.previews);
  // const heicURL = 'https://assets.templifyapp.com/previews/images/air_feed.heic';
  // const [imageDataUrl, setImageDataUrl] = useState<string>('');

  // useEffect(() => {
  //   fetch(heicURL)
  //     .then((response) => response.blob())
  //     .then((heicBlob) => {
  //       const image = new Image();
  //       image.onload = () => {
  //         const canvas = document.createElement('canvas');
  //         canvas.width = image.width;
  //         canvas.height = image.height;
  //
  //         const context = canvas.getContext('2d');
  //         context?.drawImage(image, 0, 0);
  //
  //         canvas.toBlob((jpegBlob) => {
  //           if (jpegBlob) {
  //             const dataUrl = URL.createObjectURL(jpegBlob);
  //             setImageDataUrl(dataUrl);
  //           } else {
  //             console.error('Conversion to JPEG failed.');
  //           }
  //         }, 'image/jpeg');
  //       };
  //
  //       image.src = URL.createObjectURL(heicBlob);
  //     })
  //     .catch((error) => {
  //       console.error('Error converting image:', error);
  //     });
  // }, []);
  return (
    <div className="grid grid-cols-5 gap-7">
      {Object.keys(previews).map((key) => {
        const {
          id,
          title,
          feed: { imageURL },
        } = previews[key];
        return (
          <div className="rounded-lg border-2 p-5" key={key}>
            <img alt={title} className="rounded" src={AIR_FEED} />
            <div className="flex pt-5">
              <p className="pr-3 font-bold">ID: {id}</p>
              <p className="pl-3 font-bold">Title: {title}</p>
            </div>
            <p className="pt-2"> Image URL: {imageURL}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Previews;
