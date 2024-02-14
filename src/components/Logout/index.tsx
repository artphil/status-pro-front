import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('token');
  }
  useLayoutEffect(() => {
    logout();
    navigate('/login');
  }, []);

  return (
    <main>
      Logout Page
    </main>
  );
}

export default Logout;