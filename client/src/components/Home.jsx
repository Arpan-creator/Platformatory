// src/pages/Home.jsx
import { useAuth0 } from "@auth0/auth0-react";
import "./Home.css";

const Home = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <main className="home-container">
      <section className="home-content animated-fade-in">
        <h1 className="home-title">Your Digital Identity, Perfected.</h1>
        <p className="home-subtitle">
          Seamlessly manage your personal information.<br />
          Smart automation. Secure access. One unified platform.
        </p>

        {!isAuthenticated ? (
          <button 
            className="home-button" 
            onClick={() => loginWithRedirect()} 
            aria-label="Start using the platform"
          >
            Get Started
            <span className="home-button-icon" aria-hidden="true">→</span>
          </button>
        ) : (
          <p className="home-logged-in-message">
            ✅ You're logged in. Head to your profile or explore the platform.
          </p>
        )}
      </section>
    </main>
  );
};

export default Home;
