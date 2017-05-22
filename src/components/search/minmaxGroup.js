/**
 * Created by Anthony Lord on 2017-05-11.
 */
import React from 'react';
import {FormGroup} from "react-bootstrap";
import {Field} from "redux-form";

const  { DOM: { input} } = React;


const MinMaxGroup = (props) => (
<span>
    <FormGroup controlId={"min" + props.minMaxName}>
        <div className="minmax group">
            { props.wantHeader ? <div className="minmaxHeader">{props.header}</div>
                               : null}
            <Field name={"min" + props.minMaxName} component="input" type="text" placeholder=" "/>
            <label>min</label>
        </div>
    </FormGroup>
    <FormGroup controlId={"max" + props.minMaxName}>
        <div className="minmax group right10">
             <Field name={"max" + props.minMaxName} component="input" type="text" placeholder=" "/>
            <label>max</label>
        </div>
    </FormGroup>
</span>
);


export default MinMaxGroup;
