import { HyperText } from "../components/ui/HyperText ";
import { VelocityScroll } from "../components/ui/VelocityScroll ";
import { useNavigate } from 'react-router-dom';

function Velocity() {

  const navigate = useNavigate();
  
  const openTwitter = () => {
    console.log("Opening Twitter...");
    window.open("https://twitter.com/SachinPati8313", "_blank");
  };

  const openLinkedIn = () => {
    console.log("Opening LinkedIn...");
    window.open("https://www.linkedin.com/in/sachin-patil30", "_blank");
  };

  const opengithub = () => {
    console.log("Opening Github...");
    window.open("https://github.com/SachinPa30", "_blank");


  };  

  const instagramprofile=()=>{
    console.log("instagram working");
navigate("/Instapage");
    
  }

  return (
    <div style={{ position: "relative", backgroundColor: "black", minHeight: "100vh" , maxWidth:"100%" }}>
      <div style={{ position: "absolute", top: "100px" }}>
        <VelocityScroll>Developer & Designer Community</VelocityScroll>

        <div className="row" style={{ paddingTop: "100px", display: "flex", justifyContent: "center" }}>
          <h2
            style={{
              position: "absolute",
              left: "100px",
              top: "450px",
              fontSize: "50px",
              fontStyle: "inherit",
              fontWeight: "bold",
            }}
          >
            Find me:
          </h2>
          <div className="col" style={{ display: "inline-block", paddingLeft: "200px" }}>
            {/* ✅ HyperText is now clickable properly */}
            <div style={{ height: "90px", fontWeight: "bold", paddingTop: "50px", cursor: "pointer" }}>
              <HyperText onClick={openTwitter}>Twitter</HyperText>
            </div>

            <div style={{ height: "90px", fontWeight: "bold", paddingTop: "50px" }}>
              <HyperText onClick={opengithub}>Github</HyperText>
            </div>

            <div style={{ height: "90px", fontWeight: "bold", paddingTop: "50px", cursor: "pointer" }}>
              <HyperText onClick={openLinkedIn}>LinkedIn</HyperText>
            </div>

            <div style={{ height: "90px", fontWeight: "bold", paddingTop: "50px" }}>
              <HyperText onClick = {instagramprofile}>Instagram</HyperText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Velocity;
