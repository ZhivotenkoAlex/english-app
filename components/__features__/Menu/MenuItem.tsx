import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { useRouter } from 'next/router'
import { IMenuItem as IMenuItemType } from "../../../types";

interface IMenuItem {
    item: IMenuItemType;
}
function MenuItem({ item }: IMenuItem) {
    const router = useRouter();

    const handleItemClick = () => {
        router.push(item.path);
    };

    return (
        <Wrapper>
            <Item onClick={handleItemClick}>{item.label}</Item>
        </Wrapper>
    );
}

const Item = styled.div`
    cursor: pointer;
    padding: 0 12px;
    color: white;
    font-weight: 500;
    border-radius: 16px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: ${colors.dark};
    &:hover {
        background: ${colors.lightGrey};
        color: ${colors.dark};
    }
`;

const Wrapper = styled.div`
    position: relative;
`;
export default MenuItem;
