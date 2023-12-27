import styled from "styled-components";
import { IPopupMenuItem } from "../../../types";
import { colors } from "../../../utils/colors";
import PopupItem from "./PopupItem";

interface IPopupMenu {
    items: Array<IPopupMenuItem>;
}
function PopupMenu({ items }: IPopupMenu) {
    return (
        <List>
            {items.map((item) => (
                <PopupItem key={item.id} item={item} />
            ))}
        </List>
    );
}

const List = styled("ul")`
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    color: ${colors.dark};
    width: 220px;
    list-style: none;
    position: absolute;
    top: 40;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
`;
export default PopupMenu;
