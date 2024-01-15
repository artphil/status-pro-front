import Login from "components/Login";

import { ContentLeft, ContentRight, Main } from "./style";


function LoginPage() {
    return (
        <Main>
            <ContentLeft></ContentLeft>
            <ContentRight>
                <Login />
            </ContentRight>
        </Main>
    );
}

export default LoginPage;

