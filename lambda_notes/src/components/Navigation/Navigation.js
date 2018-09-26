import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const NavColumn = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 200px;
  border: 1px solid black;
  position: fixed;
  background-color: lightgrey;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.div`
  border: 1px solid black;
  background-color: #30b8bc;
  margin: 10px 20px;
  width: 75%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Navigation extends Component {
  render() {
    return (
      <NavColumn>
        <header>Lambda Notes</header>
        <ButtonContainer>
          <Button>
            <NavLink to="/notes">View Your Notes</NavLink>
          </Button>
          <Button>
            <NavLink to="/notes/add">+ Create New Note</NavLink>
          </Button>
        </ButtonContainer>
      </NavColumn>
    );
  }
}

export default withRouter(Navigation);
