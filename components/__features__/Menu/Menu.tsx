import styled from "styled-components";
import MenuItem from "./MenuItem";

function Menu() {
    const MENU_ITEMS = [
        {
            id: 1,
            label: "Lessons",
            path: "/dashboard",
        },
        {
            id: 2,
            label: "Vocabulary",
            path: "/vocabulary",
        },

        {
            id: 3,
            label: "Grammar",
            path: "/grammar",
        },

        {
            id: 4,
            label: "Dictionary",
            path: "/dictionary",
        },
    ];
    return (
        <List>
            {MENU_ITEMS.map((item) => (
                <MenuItem key={item.id} item={item} />
            ))}
        </List>
    );
}

const List = styled("ul")`
    display: flex;
    list-style: none;
    gap: 1.5rem;
`;

export default Menu;
