import styled from "styled-components";

export const WelcomePageStyled = styled.section`

  width: 100%;
  height: auto;
  background-color: #353535;
  .slider-container {
    width: 100%;
    display: flex;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .slider {
    width: 95% !important;
    /* height: 80vh; */
  }
  .carousel-control-next-icon,
  .carousel-control-prev-icon {
    background-color: #0765ff;
  }

  .movie-container {
    position: relative;
  }
  .welcome-image {
    opacity: 0.6;
    filter: grayscale(40%);
  }
  .movie-information {
    position: absolute;
    bottom: 200px;
    /* left: -300px; */
    font-size: 18px;
    color: #e5e5e5;
    font-size: 2rem;
    
  }
  .movie-title {
    font-size: 4rem;
    color: #ffa106;
    font-weight: bold;
    
  }
  /* .movie-name {
    color: #ffa106;
    font-weight: bold;
    border: 1px solid white;

  } */
  .rec.rec-arrow {
    background-color: rgba(0, 0, 0, 1);
  }
  .rec.rec-dot {
    background-color: rgba(255, 255, 255, 1);
  }

  @media only screen and (max-width:1000px){
    /* .caroussel-container{
      display: flex;
      justify-content: center;
      align-items: center;
    } */
    .movie-information {
    /* position: absolute; */
    bottom: 100px;
    /* left: -300px; */
    font-size: 18px;
    color: #e5e5e5;
    font-size: 2rem;
    
  }
  .movie-title {
    font-size: 3rem;
    color: #ffa106;
    font-weight: bold;
   
  }
    }
    @media only screen and (max-width:850px){
    /* .caroussel-container{
      display: flex;
      justify-content: center;
      align-items: center;
    } */
    .movie-information {
    /* position: absolute; */
    bottom: 100px;
    /* left: -300px; */
    font-size: 18px;
    color: #e5e5e5;
    font-size: 2rem;
    
  }
  .movie-title {
    font-size: 3rem;
    color: #ffa106;
    font-weight: bold;
   
  }
    }

    @media only screen and (max-width:720px){
   
    .movie-information {
    /* position: absolute; */

    bottom: 40px;
    /* left: -300px; */
    font-size: 18px;
    color: #e5e5e5;
    font-size: 1.2rem;
    
  }
  .movie-title {
    font-size: 2.5rem;
    color: #ffa106;
    font-weight: bold;
   
  }
    }
    @media only screen and (max-width:500px){
   
   .movie-information {
   /* position: absolute; */

   bottom: 0px;
   /* left: -300px; */
   font-size: 18px;
   color: #e5e5e5;
   font-size: 1rem;
   
 }
 .movie-title {
   font-size: 1.7rem;
   color: #ffa106;
   font-weight: bold;
  
 }
   }
 
`;
