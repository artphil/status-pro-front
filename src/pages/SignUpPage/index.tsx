import { ContentLeft, ContentRight, Main } from "./style";

import SignUp from "components/SignUp";


function SignUpPage() {
    return (
        <Main>
            <ContentLeft></ContentLeft>
            <ContentRight>
                <SignUp />
            </ContentRight>
        </Main>
    );
}

export default SignUpPage;

