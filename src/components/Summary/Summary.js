import React from 'react';
import cn from './Summary.module.scss';
import dr_bergin from 'assets/summary/dr_bergin.jpg';
import {Button} from "@material-ui/core";

const Summary = () => {
  return (
    <>
      <div className={cn.Summary}>

        <div className={cn.Header}>
          <div className={cn.Title}>
            <span className={cn.Welcome}>WELCOME TO</span>
            <span className={cn.Name}>BERGIN PROSTHODONTICS</span>
          </div>
          <hr className={cn.Break}></hr>
          <span>lots of text here about the office</span>
        </div>

        <div className={cn.Image}>
          <img src={dr_bergin}></img>
          <Button variant="outline" className={cn.Button}>Meet Dr. Bergin</Button>
        </div>

      </div>
    </>
  )
}

export default Summary 