import LoginPage from "../LoginPage";
import Logout from 'components/Logout/Logout';

function HomePage() {
    const user = localStorage.getItem('token');

    function getHomePage() {
        return (
            user? 
            <div>Usuario logado 
                <Logout></Logout></div>: <LoginPage/> 
            )
    }
    return ( 
        <>Home
            {getHomePage()}

        </>
     );
}

export default HomePage;