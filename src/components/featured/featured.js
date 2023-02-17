import { useState, useEffect } from "react";
import "./featured.css"
import ghost from "./mood.gif"

function Featured() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const [, setIndex] = useState(1);
  const toRotate = ["You Can Really Taste IT!", "Hunt Amazon Finds!!", "Hunt Amazon Finds!!", "When You Just Feel It?", "Hunt Amazon Finds!!"];
  const period = 2000;

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
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <div className='container-fluid featured'>
      <div className='row'>
        <div className='col_left col-lg-6'>
          <div>
          <h1>Can You Feel It?</h1>
          <h1 className="txt-rotate" dataperiod="800" data-rotate='[ "Hunt Amazon finds!!", "Hunt Amazon finds!!", "Hunt Amazon finds!!", "When You Just Feel It?", "Hunt Amazon Finds!!" ]'><span className="wrap">{text}</span></h1>
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