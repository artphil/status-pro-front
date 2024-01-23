import { useLayoutEffect } from "react";

import { useNavigate } from "react-router";

import Logout from "components/Logout";

function HomePage() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!token) navigate("/login");
  }, []);

  return (
    <div>
      Usuario logado
      <Logout></Logout>
    </div>
  );
}

export default HomePage;
