import React from 'react';
import SectionCover from '../Shared/SectionCover';

const PizzaCover = () => {
  return (
    <div>
      <SectionCover
        backgroundImage={
          "https://i.ibb.co/kyNq2NB/freshly-italian-pizza-with-mozza.png"
        }
        title={"pizza"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
    </div>
  );
};


export default PizzaCover;