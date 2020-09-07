import styled from 'styled-components';

export const Container = styled.div`
margin: 50px 100px;
border: 1px solid #049fd9;

.toggle {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    height: 50px;
    text-align: center;
    font-size: 20px;
    border-top: 1px solid #049fd9;
    border-bottom: 1px solid #049fd9;
}

.toggle .selected {
    background-color: #049fd9;
}

.toggle div {
    padding-top: 20px;
}

.row {
    display: grid;
    grid-template-columns: repeat(10,1fr);
    padding: 20px;
    border-top: 1px solid #049fd9;
    border-bottom: 1px solid #049fd9;
}

.index {
    grid-column-start: 1;
    grid-column-end: 2;
}

.date {
    grid-column-start: 2;
    grid-column-end: 7;
}

.category {
    grid-column-start: 7;
    grid-column-end: 8;
}

.sub-category {
    grid-column-start: 8;
    grid-column-end: 9;
}

.amount {
    grid-column-start: 9;
    grid-column-end: 10;
}

.title {
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    padding: 20px;
}
`;

export const ExpenseInputForm = styled.div`
  .title {
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    padding: 20px;
  }

  .field {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    padding: 20px;
  }

  .label {
    padding-left: 400px;
  }

  .value select,
  .value input {
    width: 300px;
  }

  .submit-button {
    background-color: #049fd9;
    border-color: #049fd9;
    color: white;
    height: 30px;
    text-align: center;
    padding-top: 10px;
    line-height: 30px;
    height: 45px;
  }
`

