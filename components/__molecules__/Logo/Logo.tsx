import styled from "styled-components";
import Heading from "../../__atoms__/Heading/Heading";
import Image from "next/image";

function Logo() {
    return (
        <Wrapper>
            <Image src="/images/logo.png" alt="logo" width={50} height={50} />
            <Heading title={"Learning platform"} color="orange" size={18} />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;
export default Logo;
