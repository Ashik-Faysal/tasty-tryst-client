import React from 'react';
import SectionCover from '../Shared/SectionCover';

const DessertCover = () => {
    return (
      <div>
        <SectionCover
          backgroundImage={
            "https://i.ibb.co/bKZcmhD/Creme-Brulee-with-Berries-800x53.png"
          }
          title={"Dessert"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </div>
    );
};

export default DessertCover;