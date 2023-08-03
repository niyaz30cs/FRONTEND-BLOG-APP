import React from 'react'
import TheLatestBollywood from './TheLatestBollywood'
import TheLatestHollywood from './TheLatestHollywood'
import TheLatestTechnology from './TheLatestTechnology'
import TheLatestFitness from './TheLatestFitness'
import TheLatestFood from './TheLatestFood'

function TheLatest() {
  return (
    <div>
      <h1 className='line'>The Latest</h1>
      <div className='AllTheLatest'>
      <TheLatestBollywood/>
      <TheLatestHollywood/>
      <TheLatestTechnology/>
      <TheLatestFitness/>
      <TheLatestFood/>
      </div>
    </div>
  )
}

export default TheLatest
