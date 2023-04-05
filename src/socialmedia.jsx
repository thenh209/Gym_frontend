import insta from "./assets/insta.png";
import twitter from "./assets/twitter.png";
export default function SocialMedia(){
    return (
    <div id="contact" style={{textAlign:"center"}}>
    <br></br>
    <h2 className="ftext" style={{textDecoration:"underline"}}>Follow Us On</h2>
    <h5 className="ftext">INSTAGRAM :</h5>
    <a className="ftext"target="_blank" href="https://instagram.com/the_nh_209?igshid=YmMyMTA2M2Y="><img id="fimg" src={insta} alt=""></img></a>
    <h5 className="ftext">TWITTER :</h5>
    <a className="ftext"target="_blank" href="https://twitter.com/the_nh_209?t=Mklj-yhfq8TvUFawkywQxA&s=09"><img id="fimg" src={twitter} alt=""></img></a>
    </div>
    );
    }