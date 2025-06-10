import { useEffect } from "react";
import { Link } from "react-router";

const Home = () => {
  useEffect(() => {
    console.log("App mounted");

    const handleScroll = () => {
      console.log("scroll");
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "500vh" }}>
      Home
      <Link to="/about">About</Link>
      <Link to="/star-wars">Star Wars</Link>
    </div>
  );
};

export default Home;
