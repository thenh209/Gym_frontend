import content from './assets/content.jpg'
export default function Content()
{
    return(
        <div id="c">
        <img id="cimg"src={content}></img>
       <div id="ctext" style={{textAlign:"center",width:"20em",margin:"10px auto",fontSize:"1.5em",backgroundColor:"rgb(140, 130, 140",borderRadius:"10px",fontFamily:"cursive"}}>Welcome to our gym! We are thrilled to have you visit our website and learn more about the fitness programs and facilities we offer. Our gym is a community of individuals who are committed to living healthier, more active lives. Whether you are just starting out on your fitness journey or are a seasoned athlete, we have something to offer you. Our state-of-the-art facilities are designed to provide you with everything you need to achieve your fitness goals, including top-of-the-line equipment, expert trainers, and a supportive environment. So take a look around our website and see what we have to offer. We can't wait to help you become the best version of yourself!</div>
       </div>
    );
}