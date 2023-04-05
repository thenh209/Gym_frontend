import { useState } from 'react';
import ReactPlayer from 'react-player';
import Barbell_rack_pull from './assets/leg/Barbell_rack_pull.mp4';
import Leg_press_machine_normal_stance from './assets/leg/Leg_press_machine_normal_stance.mp4';
import Triceps_kickback_on_crossover_machine from './assets/triceps/Triceps_kickback_on_crossover_machine.mp4';
import Bench_dip_knees_bent from './assets/triceps/Bench_dip_knees_bent.mp4';
import Dumbbell_onearm_lateral_raise from './assets/shoulder/Dumbbell_onearm_lateral_raise.mp4';
import Front_raise_resistance_band_fitness from './assets/shoulder/Front_raise_resistance_band_fitness.mp4';
import Dumbbell_incline_lying_front_raise from './assets/back/Dumbbell_incline_lying_front_raise.mp4';
import Dumbbell_lying_rear_delt_row from './assets/back/Dumbbell_lying_rear_delt_row.mp4';
import Exercise_ball_lying_side_lat_stretch from './assets/abs/Exercise_ball_lying_side_lat_stretch.mp4';
export default function Tutorial() {
  const [showDiv1, setShowDiv1] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);
  const [showDiv3, setShowDiv3] = useState(false);
  const [showDiv4, setShowDiv4] = useState(false);
  const [showDiv5, setShowDiv5] = useState(false);
  const handleClick1 = () => {
    setShowDiv1(!showDiv1);
  }
  const handleClick2 = () => {
    setShowDiv2(!showDiv2);
  }
  const handleClick3 = () => {
    setShowDiv3(!showDiv3);
  }
  const handleClick4 = () => {
    setShowDiv4(!showDiv4);
  }
  const handleClick5 = () => {
    setShowDiv5(!showDiv5);
  }
  return (
    <div id="tutorial">
       <h1 class="heading">Tutorial</h1>
       <p style={{fontSize:"2em",fontFamily:"cursive"}}>Here are some of tutorial to practice,</p>
       <p style={{fontSize:"2em",color:"blue",fontFamily:"fantasy"}}>"Practice Make Man Perfect"</p>
       <p style={{fontSize:"2em",color:"blue",fontFamily:"fantasy"}}>"Start Now Itself"</p>
      <button onClick={handleClick1} class="btn">LEG</button>
      {showDiv1 && 
        <div class="vid">
        <h2>Barbell Rack Pull</h2>
        <ReactPlayer
            url={Barbell_rack_pull}
           controls
           />
        <h2>Leg Press Machine Normal Stance</h2>
        <ReactPlayer
            url={Leg_press_machine_normal_stance}
           controls
           />
      </div>}<br></br><br></br>
      <button onClick={handleClick2} class="btn">TRICEPS</button>
      {showDiv2 && 
        <div class="vid">
        <h2>Triceps Kickback On Crossover Machine</h2>
        <ReactPlayer
            url={Triceps_kickback_on_crossover_machine}
           controls
           />
        <h2>Bench Dip Knees Bent</h2>
        <ReactPlayer
            url={Bench_dip_knees_bent}
           controls
           />
      </div>}<br></br><br></br>
      <button onClick={handleClick3} class="btn">SHOULDER</button>
      {showDiv3 && 
        <div class="vid">
        <h2>Dumbbell Onearm Lateral Raise</h2>
        <ReactPlayer
            url={Dumbbell_onearm_lateral_raise}
           controls
           />
        <h2>Front Raise Resistance Band Fitness</h2>
        <ReactPlayer
            url={Front_raise_resistance_band_fitness}
           controls
           />
      </div>}<br></br><br></br>
      <button onClick={handleClick4} class="btn">BACK</button>
      {showDiv4 && 
        <div class="vid">
        <h2>Dumbbell Incline Lying Front Raise</h2>
        <ReactPlayer
            url={Dumbbell_incline_lying_front_raise}
           controls
           />
        <h2>Dumbbell Lying Rear Delt Row</h2>
        <ReactPlayer
            url={Dumbbell_lying_rear_delt_row}
           controls
           />
        </div>}<br></br><br></br>
        <button onClick={handleClick5} class="btn">ABS</button>
        {showDiv5 && 
        <div class="vid">
        <h2>Exercise Ball Lying Side Lat Stretch</h2>
        <ReactPlayer
            url={Exercise_ball_lying_side_lat_stretch}
           controls
           />
        </div>}
    </div>
  );
}
