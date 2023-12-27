import styled from "styled-components";
import Logo from "../../__molecules__/Logo/Logo";
import Menu from "../Menu/Menu";
import Avatar from "../Avatar/Avatar";

function TopNavbar() {
    return (
        <Wrapper>
            <Logo />
            <Menu />
            <Avatar />
        </Wrapper>
    );
}

export default TopNavbar;

const Wrapper = styled.div`
    top: 0;
    right: 0;
    left: 0;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    position: fixed;
    height: 64px;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    z-index: 10;
`;
