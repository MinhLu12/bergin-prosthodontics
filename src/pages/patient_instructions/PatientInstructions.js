import React from "react";
import cn from "./PatientInstructions.module.scss";
import { Button } from "@material-ui/core";
import classNames from "classnames/bind";

export default function PatientInstructions() {
    return (
        <div className={cn.Patient_Instructions}>
            <p className={classNames(cn.Title, cn.Title_Spacing)}>
                New Patient Form
            </p>
            <Button variant="contained" className={cn.Button}>
                Paper Form
            </Button>

            <p className={classNames(cn.Title, cn.Title_Spacing)}>
                Patient Instructions
            </p>

            <Button variant="contained" className={cn.Button}>
                Paper Form
            </Button>
            <Button
                variant="contained"
                className={classNames(cn.Button, cn.Button_Spacing)}
            >
                Paper Form
            </Button>
            <Button variant="contained" className={cn.Button}>
                Paper Form
            </Button>
        </div>
    );
}
