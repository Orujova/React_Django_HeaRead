import { BeatLoader } from "react-spinners";

const Preloader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <BeatLoader color="#1e4295" size={30} />
    </div>
  );
};

export default Preloader;
