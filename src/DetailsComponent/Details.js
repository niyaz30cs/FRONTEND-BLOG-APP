import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import man from "../Mask Group 16.png"
import facebook from "../facebook.png"
import twitter from "../twitter.jpeg"
import instagram from "../instagram.jpeg"
import youtube from "../youtube.png"
import clap from "../rythm.svg"
import share from "../share.svg"
import TheLatestBollywood from '../TheLastestComponent/TheLatestBollywood'
import TheLatestHollywood from '../TheLastestComponent/TheLatestHollywood'
import TheLatestTechnology from '../TheLastestComponent/TheLatestTechnology'
import TheLatestFitness from '../TheLastestComponent/TheLatestFitness'
import TheLatestFood from '../TheLastestComponent/TheLatestFood'

function Details() {
  const navigate = useNavigate();
  const niyaz = useLocation().state
  console.log(niyaz);
  console.log("hii");
  return (
    <>
      <div className='mainPart'>
        <div className='arrange'>
          <div className='manHead'>
            <img src={man} alt='man' />
            <div className='niyaz'>
              <h4>Written By</h4>
              <h3>Niyaz Alam</h3>
              <p>Aug,1,2023-10 min read</p>
            </div>
          </div>
          <div className='social'>
            <img src={facebook} alt='facebook' className='allLogo' />
            <img src={twitter} alt='twitter' className='allLogo' />
            <img src={instagram} alt='instagram' className='allLogo' />
            <img src={youtube} alt='youtube' className='allLogo' />
          </div>
        </div>
        <div className='join'>
          <div className='clap'>
            <img src={clap} alt='clap' />
            <p className='textOff'>9.2k</p>
          </div>
          <div className='share'>
            <img src={share} alt="share" />
            <p className='textOff'>Share with article</p>
          </div>
        </div>
        <div className='boxShadow'>
          <div className='details'>
            <h2 className='detailsContent'>{niyaz.title}</h2>
            <img src={niyaz.urlToImage} alt='hello' className='detailsImage' />
            <div className='detailsContent'>
              <h5>{niyaz.content}</h5>
              <p>{niyaz.description}</p>
            </div>
          </div>
          <div className='threeBtn'>
            <button>React</button>
            <button>Javascript</button>
            <button>Animation</button>
          </div>
          <div className='bottomClap'>
            <img src={clap} alt='clap' />
            <p className='textOff'>9.2k claps</p>
          </div>
          <hr />
          <div className='manHead'>
            <img src={man} alt='man' />
            <div className='niyaz'>
              <h5>WRITTEN BY</h5>
              <h3>Niyaz Alam</h3>
              <p>Aug,1,2023-10 min read</p>
            </div>
          </div>
        </div>
      </div>
      <div className='OnlyBackground'>
        <h2>More from the Siren</h2>
        <div className='AllTheLatest2'>
          <div className='lastPart'>
            <TheLatestBollywood />
            <div className='manHead'>
              <img src={man} alt='man' />
              <div className='niyaz'>
                <h3>Niyaz Alam</h3>
                <p>Aug,1,2023-10 min read</p>
              </div>
            </div>
          </div>
          <div className='lastPart'>
            <TheLatestHollywood />
            <div className='manHead'>
              <img src={man} alt='man' />
              <div className='niyaz'>
                <h3>Niyaz Alam</h3>
                <p>Aug,1,2023-10 min read</p>
              </div>
            </div>
          </div>
          <div className='lastPart'>
            <TheLatestTechnology />
            <div className='manHead'>
              <img src={man} alt='man' />
              <div className='niyaz'>
                <h3>Niyaz Alam</h3>
                <p>Aug,1,2023-10 min read</p>
              </div>
            </div>
          </div>
          <div className='lastPart'>
            <TheLatestFitness />
            <div className='manHead'>
              <img src={man} alt='man' />
              <div className='niyaz'>
                <h3>Niyaz Alam</h3>
                <p>Aug,1,2023-10 min read</p>
              </div>
            </div>
          </div>
          <div className='lastPart'>
            <TheLatestFood />
            <div className='manHead'>
              <img src={man} alt='man' />
              <div className='niyaz'>
                <h3>Niyaz Alam</h3>
                <p>Aug,1,2023-10 min read</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='detailsBack'>
        <button onClick={(() => navigate(-1))} className='BackBtn'>Go Back</button>
      </div>
    </>
  )
}

export default Details
