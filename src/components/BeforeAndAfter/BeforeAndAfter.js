import React from 'react';
import cn from './BeforeAndAfter.module.scss';

const BeforeAndAfter = () => {
  return (
    <>
      <div className={cn.BeforeAndAfter}>
        <div className={cn.Image}>
          <img src="/FrontPageBeforeAndAfter/Before.png"></img>
          <img src="/FrontPageBeforeAndAfter/After.png"></img>
        </div>
        <div className={cn.Text}>
          <span className={cn.Header}> Creating Smiles with a Gentle touch.</span>

          <div>
            <a className={cn.ClickHere} href="#">Click here</a>
            <span className={cn.TextInliner}>&nbsp; to view our full smile gallery.</span>
          </div>

        </div>
      </div>
    </>
  )
}

export default BeforeAndAfter;