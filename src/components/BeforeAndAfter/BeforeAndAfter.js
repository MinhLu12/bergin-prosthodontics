import React from 'react';
import cn from './BeforeAndAfter.module.scss';

const BeforeAndAfter = () => {
    return (
        <>
            <div className ={cn.BeforeAndAfter}>
                <img src="/FrontPageBeforeAndAfter/Before.png"></img>
                <img src="/FrontPageBeforeAndAfter/After.png"></img>
                <div>
                    <p> Creating Smiles with a Gentle touch.</p>
                    <a className={cn.ClickHere} href = "#" > Click here </a> 
                    <p className={cn.TextInliner}> to view our full smile gallery.</p>
                </div>
            </div>
        </>
    )
}

export default BeforeAndAfter;