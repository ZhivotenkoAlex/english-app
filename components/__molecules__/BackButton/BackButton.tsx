import { useCallback } from "react";
import Button from "../Button/Button";
import { useRouter } from 'next/router'
import styled from "styled-components";

function BackButton() {
    const router = useRouter();

    const handleNavigateToDashboard = useCallback(() => {
        router.push("/");
    }, [router]);

    return (
        <BackButtonWrapper>
            <Button
                disabled={false}
                label="Back"
                color="green"
                type="outlined"
                onClick={handleNavigateToDashboard}
                size="small"
            />
        </BackButtonWrapper>
    );
}

const BackButtonWrapper = styled.div`
    button {
        width: auto;
    }
`;

export default BackButton;
