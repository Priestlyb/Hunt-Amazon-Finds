import { useState, useEffect } from "react";
import "./featured.css"
import ghost from "./mood.gif"

function Featured() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(550 - Math.random() * 1);
  const [, setIndex] = useState();
  const toRotate = [ "Welcome to Hunt Amazon Finds,", "where adventure awaits in the cursed jungle.", "But be warned, for the jungle is full of treasures that hold unspeakable horrors.", "Will you have the courage to explore its depths and claim the treasures that await, or will you fall victim to its cursed power" ];
  const period = 550;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 1);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 5);
      setIndex(10);
      setDelta(1);
    } else {
      setIndex(prevIndex => prevIndex + 2);
    }
  }

  return (
    <div className='container-fluid featured'>
      <div className='row featured_row'>
        <div className='col_left col-lg-6'>
          <div>
          <h1 className="txt-rotate animate__animated animate__fadeInRight" dataperiod="800" data-rotate='[ "Welcome to Hunt Amazon Finds, where adventure awaits in the cursed jungle. But be warned, for the jungle is full of treasures that hold unspeakable horrors. Will you have the courage to explore its depths and claim the treasures that await, or will you fall victim to its cursed power" ]'><span className="wrap">{text}</span></h1>
          </div>

        </div>
        <div className='col_right col-lg-6'>
          <img className='featured_img' src={ghost} autoPlay loop muted alt=""/>
        </div>
        
        <div className='col_bottom col-lg-12'>
          <a href='#products'>
            <i className="fa-solid fa-angles-down"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Featured