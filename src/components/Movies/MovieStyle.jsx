import styled from "styled-components";

export const MovieSection = styled.section`
  padding: 4rem 1rem;
  padding-top: 6rem;
  background-color: #e5e5e5;
  .moviesContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .pagination {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    margin-top: 0.5rem;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0rem;
  margin-bottom: 1rem;
  Button {
    margin: 0.5rem;
  }
`;
export const StyledPagination = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  align-content: center;
  margin-top: 0.5rem;
  width: 80%;
  .paginationBar {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    font-size: 1.3rem;
    list-style: none;
  }
  .activePage {
    background-color: #2b6dfb;
  }
  .activePageLink {
    color: #ffffff;
  }
  .pageNumber {
    border: 1px solid #2b6dfb;
    padding: 0.2rem 0.5rem;
  }
  .pageNumberLink {
    text-decoration: none;
  }
  .next {
    margin: auto;
    margin-left: 0.5rem;
    color: #2b6dfb;
  }
  .previous {
    margin: auto;
    margin-right: 0.5rem;
    color: #2b6dfb;
  }
  .break {
    border: 1px solid #2b6dfb;
    color: #2b6dfb;
    padding: 0.2rem 0.5rem;
  }
`;
export const GenresContainerStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  .movieGenre {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #2b6dfb;
    border-radius: 8px;
    margin: 0 0.5rem 0.5rem 0;
    cursor: pointer;
  }
  .movieGenre:hover {
    color: #fff;
    background-color: #2b6dfb;
  }
  .movieGenre:focus {
    color: #fff;
    background-color: #2b6dfb;
  }
`;
export const ActiveGenre = styled.div`
  display: flex;
  justify-content: center;
  color: #ffffff;
  font-size: 2rem !important;
  background-color: #2b6dfb;
  padding: 1rem;
  margin: 1rem 0;
`;
