
import styled from "styled-components";
// import { AiOutlineArrowUp }
import { Link } from "react-router-dom";

const Header = () => {



  return (
        <Container bg='#221E63' cl='white' br="#221E63">
        <Wrapper>
            <Logo>
                <h1>Valerian Federation</h1>
            </Logo>
            <Navigation>
            <Nav to="">Data Fetching</Nav>
                <Nav to="todo">Todo</Nav>
                <Nav to="statemanagement">State Management</Nav>
             
            </Navigation>
        </Wrapper>
        </Container>
);
};

export default Header;

const Container = styled.div<{ bg: string; cl: string; br: string }>`
    height: 70px;
    width: 100%;
    background-color: ${(props) => props.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${(props) => props.br};
    color: ${(props) => props.cl};
    position: sticky;
	top: 0;
	z-index: 19189;
	transition: all 350ms;
`;
const Wrapper = styled.div`
    height: 50px;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Logo = styled.div`
    h1{
        font-size: xx-large;
        font-weight: bolder;
    }
`;
const Navigation = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`;
const Nav = styled(Link)`
    font-weight: bolder;
    color: white;
    text-decoration: none;
`;
