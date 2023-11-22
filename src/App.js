import React, { useState, useEffect } from 'react';
import bad from './bad.mp3';  
import FadeInOut from "./FadeInOut";
import dogsVideo from './dogs.MOV';
import moreDogsVideo from './more_dogs.mov';
import badaVideo from './bada.MOV';
import './App.css';

// Dummy images
const images = [
  {
    'src': 'umesh.PNG',
    'caption': 'we love umeshpatel789'
  },
  {
    'src': 'umesh_background.jpeg',
    'caption': 'our man our hero our favorite'
  },
  {
    'src': 'badalee.png',
    'caption': 'smoke by bada lee',
  },
  {
    'src': dogsVideo,
    'caption': 'i love ur dogs',
    'video': true,
  },
  {
    'src': moreDogsVideo,
    'caption': 'i love ur dogs pt. 2',
    'video': true,
  },
  {
    'src': badaVideo,
    'caption': 'bada lee in action',
    'video': true,
  },
  {
    'src': 'airdrop.jpeg',
    'caption': 'crate drop for kelsea'
  },
  {
    'src': 'crate.jpeg',
    'caption': 'first ever boo basket given and received ✅',
  },
  {
    'src': 'emergencypickup.PNG',
    'caption': 'the 3 musketeers in an emergency pickup'
  },
  {
    'src': 'experiment.JPG',
    'caption': 'our... experiment',
  },
  {
    'src': 'happy.jpg',
    'caption': 'cute',
  },
  {
    'src': 'flowersrila.PNG',
    'caption': 'ur so cute',
  },
  {
    'src': 'churros.jpeg',
    'caption': '"best churros i\'ve ever had"',
  },
  {
    'src': 'gelato.jpeg',
    'caption': '"best gelato i\'ve ever had"',
  },
  {
    'src': 'jacked.jpeg',
    'caption': 'muscle mommy'
  },
  {
    'src': 'mexico.jpeg',
    'caption': 'commemorating our first trip to mexico',
  },
  {
    'src': 'mixology.jpg',
    'caption': 'first mixology class for us both ✅',
  },
  {
    'src': 'super_shy.jpeg',
    'caption': 'super shy',
  },
  {
    'src': 'me.JPG',
    'caption': 'me when im not with u',
  },
  {
    'src': 'sf.jpg',
    'caption': 'sf getaway weekend trip ✅',
  },
  {
    'src': 'photography.jpeg',
    'caption': 'u showed me how its done',
  },
  {
    'src': 'oijibowl.JPEG',
    'caption': 'one of our best indulgences',
  },
  {
    'src': 'pubgdubs.PNG',
    'caption': 'we\'re the boat',
  },
  {
    'src': 'metaai.png',
    'caption': 'meta ai abusers chat 🤣',
  },
  {
    'src': 'flowers.png',
    'caption': 'paint n pour',
  },
  {
    'src': 'sakura.jpeg',
    'caption': 'unlucky',
  },
  {
    'src': 'twerking.jpeg',
    'caption': 'ur the first to have caught me lackin this hard',
  },
  {
    'src': 'yeppeuda.jpeg',
    'caption': '예쁘다',
  },
  {
    'src': 'kiss.jpeg',
    'caption': 'bbobbo for me <3',
  },
  {
    'src': 'bbobbo.jpeg',
    'caption': 'bbobbo for u <3',
  },
];

const passwordLeft = Math.random() * 80 + "vw"
const passwordTop = Math.random() * 60 + "vh"

const audio = new Audio(bad)
const peonies = []
for (let i=0; i<45; i++) {
  peonies.push(i)
}

function App() {
  const [step, setStep] = useState(-1);
  const [reason, setReason] = useState('');
  const [positions, setPositions] = useState(images.map(() => [0,0]));
  const [answer, setAnswer] = useState("she hasn't answered yet lol")
  const [password, setPassword] = useState("")

  const advanceStep = () => {
    setStep(step + 1);
  }

  const generatePositions = () => {
    let newTop = Math.random()*30 + 20
    let newLeft = Math.random()*80

    let newPositions = [[newTop, newLeft]]
    while (newPositions.length < images.length) {
      while (Math.abs(newTop - newPositions[newPositions.length-1][0]) < 20 && Math.abs(newLeft - newPositions[newPositions.length-1][1]) < 20) {
        newTop = Math.random()*30 + 20
        newLeft = Math.random()*80
      }
      newPositions.push([newTop, newLeft])
    }

    setPositions(newPositions)
  }

  useEffect(() => {
    generatePositions()
    if (password === "umeshpatel789") {
      audio.play()
    }
  }, [password])

  return (
    password === "umeshpatel789" ? 
      <div className="App" onClick={advanceStep} style={{ width: '100vw', height: '100vh' }}>
      {answer === "yes" && (
        peonies.map((_, __) => (
          <img className="movingImage" src='peonies.png' style={{ width: '5%', zIndex: '9999', left: Math.random()*100 + 'vw', top: -Math.random()*200 + 'vh' }} />
        ))
      )}
      <div>
        <p className="cute-font" style={{ position: 'relative', 'zIndex': 999 }}>keitai, ur the actual boat</p>
        <FadeInOut show={step > -1} duration={500}>
          <p className="cute-font" style={{ position: 'relative', 'zIndex': 999 }}>here r some dumb cute mems</p>
        </FadeInOut>
      </div>
      {images.map((image, index) => (
        <FadeInOut show={step > index} duration={500}>
          <div style={step <= index ? { display: 'none', opacity: 0 } : {
          opacity: 1,
          width: '15%', 
          backgroundColor: '#fab4e6', 
          padding: '15px', 
          zIndex: step,
          position: 'absolute',
          top: positions[index][0] + 'vh',
          left: positions[index][1] + 'vw',
        }}>
          {image['video'] ? 
          <video style={{width: '100%'}} autoPlay loop muted >
            <source src={image['src']} type="video/mp4"/>
          </video> 
          : 
          <img 
            key={index} 
            src={image['src']} 
            alt={`cute shit ${index}`} 
            onClick={() => setStep(step + 1)}
            style={{width: '100%'}}
          />}
          <div>{image['caption']}</div>
        </div>
        </FadeInOut>
      ))}

      <FadeInOut show={step > images.length} duration={500}>
        <div style={{ zIndex: 999, padding: '5px', backgroundColor: '#fae3f8', position: 'relative', width: '30%', margin: 'auto' }}>
          <p>
            this one's been a long time coming...
            we've been talking for a long while and i'm surprised that it took me this long of a while to realize that
            i not only like u as a person but that i like having u in my life.
          </p>
          <p>
            i liked all the little things in the early days... the countless
            walks we've taken around stanford down campus dr. in the wee hours of the night talking about stupid shit
            that didn't matter, our late night jbo runs to get u ur diet coke fix + "sweet treat", playing smash in my car, word hunt...
          </p>
          <p>
            and then i saw a different kelsea in our nyc arc: the kelsea that took me around the city and shared with me all the food and drink she liked and
            the activities she enjoyed doing. from my first ever paint n pour to talking over drinks at gem saloon to experiencing oijimi for the first 
            time together, it felt like these experiences were exclusive to us.
          </p>
          <p>
            fast forward to the end of nyc arc... living with u in the UES studio for the last week was like a blur and a dream. i loved being able to wake up
            and see u, enjoy slow-paced days together and order in for lunch. for the first time, it felt like i could spend unlimited time with u.
          </p>
          <p>
            now that we're both back in the bay again, where everything started, it feels like a fitting time to call it a day and start the next phase.
            thousands of word hunt games and at least 50 pubg games later (hitting diamond), i feel like we're more than ready to date.
          </p>
          <p>will u be my 여자 친구? 🤍</p>
          <button onClick={() => setAnswer("yes")}>Yes</button>
          <button onClick={() => setAnswer("no")}>싫어</button>
        </div>
      </FadeInOut>

      {answer === "yes" && (
        <div style={{ zIndex: 999, padding: '5px', backgroundColor: '#fae3f8', position: 'relative', width: '30%', margin: 'auto' }}>
          <p>call me let's go on a date</p>
          <p>and let's go on our first trip since being official soon</p>
          <p>seattle?</p>
        </div>
      )}
      
      {answer === "no" && (
        <div style={{ zIndex: 999, padding: '5px', backgroundColor: '#fae3f8', position: 'relative', width: '30%', margin: 'auto' }}>
          <div>
            <textarea placeholder="Please provide a valid reason. bro please" onChange={e => setReason(e.target.value)} />
          </div>
          {reason !== '' ? <div>"{reason}" is a shit reason 😭</div> : null}
        </div>
      )}
    </div>
    :
    <div style={{ width: '100vw', height: '100vh' }}>
      <div style={{marginLeft: passwordLeft, marginTop: passwordTop}}>
        <div>who's the boat</div>
        <input type='text' placeholder="password please" onChange={(event) => {
          setPassword(event.target.value)
          console.log(password)
        }}/>
      </div>
    </div>
  );
}

export default App;
