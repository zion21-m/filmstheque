import styled from "styled-components";

export const SerieStyled = styled.div`
  padding-top: 5rem;
  h1 {
    margin-left: 5rem;
  }
`;
export const PopularTvStyled = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem;
`;
export const PaginationStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  align-content: center;
  margin-top: 0.5rem;
  width: 80%;
  .active {
    background-color: #2b6dfb;
  }
  .activeLink {
    color: #ffffff;
  }

  .pageLink {
    text-decoration: none;
  }
  .pageNumber {
    border: 1px solid #2b6dfb;
    padding: 0.2rem 0.5rem;
  }
  .pagination {
    display: flex;
    padding: 1rem;
    font-size: 1.3rem;
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
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0rem;
  margin-bottom: 1rem;
  Button {
    margin: 0.5rem;
  }
`;
export const TvSectionStyle = styled.section`
  padding: 2rem 1rem;
`;
export const GenresContainerStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  .tvGenre {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #2b6dfb;
    border-radius: 8px;
    margin: 0 0.5rem 0.5rem 0;
    cursor: pointer;
    transition: all 0.3s;
  }
  .tvGenre:hover {
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
