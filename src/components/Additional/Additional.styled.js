import styled from 'styled-components';

export const AdditionalInfoContainer = styled.div`
  width: 1020px;
  padding: 16px 24px;
  box-shadow: 0px 0px 5px #75659a;
`;

export const CastList = styled.ul`
  padding-left: 0;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  list-style: none;
`;

export const ReviewsListItem = styled.li`
  width: 860px;
  margin-bottom: 40px;
  list-style: none;
  text-align: justify;
`;

export const DetailesListLink = styled.li`
  list-style: square;
  margin-bottom: 12px;
  color: #7c5979;

  :link {
    color: #212121;
  }

  :visited {
    color: #9b8099;
  }

  :hover {
    font-weight: 700;
    color: #7c5979;
  }
`;
