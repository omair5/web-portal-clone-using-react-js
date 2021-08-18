import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { LazyLoadComponent } from 'react-lazy-load-image-component';

// export const photos = [
//   {
//     src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
//     width: 4,
//     height: 3
//   },
//   {
//     src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
//     width: 4,
//     height: 3
//   },
//   {
//     src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
//     width: 4,
//     height: 3
//   },
//   {
//     src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
//     width: 4,
//     height: 3
//   },
//   {
//     src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
//     width: 4,
//     height: 3
//   },
//   {
//     src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
//     width: 4,
//     height: 3
//   },
// ];

const PaymentPlan = ({ photos }) => {
  // GENERATING IMAGES ARRAY
  const payment_plan_images = photos.map(value => {
    return {
      src: `${value}`,
      width: 4,
      height: 3
    }
  })

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <LazyLoadComponent>
        <Gallery photos={payment_plan_images} onClick={openLightbox} />
      </LazyLoadComponent>

      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={payment_plan_images.map(x => ({
                ...x,
                srcset: x,
                // caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
export default React.memo(PaymentPlan)