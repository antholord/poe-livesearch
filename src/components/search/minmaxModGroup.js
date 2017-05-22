/**
 * Created by Anthony Lord on 2017-05-11.
 */
import React from 'react';
import {FormGroup} from "react-bootstrap";
import {Field} from "redux-form";

const  { DOM: { input} } = React;


const MinMaxModGroup = (props) => (
    <span>
    <FormGroup controlId={props.parent + `.min`}>
        <div className="minmax group">
            <Field name={props.parent + `.min`} component="input" type="text" placeholder=" "/>
            <label>min</label>
        </div>
    </FormGroup>
    <FormGroup controlId={props.parent + `.max`}>
        <div className="minmax group right10">
             <Field name={props.parent + `.max`} component="input" type="text" placeholder=" "/>
            <label>max</label>
        </div>
    </FormGroup>
</span>
);


export default MinMaxModGroup;
/**
 * Created by Anthony Lord on 2017-05-12.
 */
