import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import man from "../Mask Group 16.png"
import facebook from "../facebook.png"
import twitter from "../twitter.jpeg"
import instagram from "../instagram.jpeg"
import youtube from "../youtube.png"
import clap from "../rythm.svg"
import share from "../share.svg"

function Details() {
  const navigate=useNavigate();
  const niyaz = useLocation().state
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
          <img src={clap} alt='clap'/>
          <p className='textOff'>9.2k</p>
        </div>
        <div className='share'>
          <img src={share} alt="share"/>
          <p className='textOff'>Share with article</p>
        </div>
        </div>
        <div className='details'>
        <h2 className='detailsContent'>{niyaz.title}</h2>
          <img src={niyaz.urlToImage} alt='hello' className='detailsImage' />
          <div className='detailsContent'>
            <h5>{niyaz.content}</h5>
            <p>{niyaz.description}</p>
          </div>
        </div>
        <button onClick={(()=>navigate(-1))} className='BackBtn'>Go Back</button>
      </div>
    </>
  )
}

export default Details
