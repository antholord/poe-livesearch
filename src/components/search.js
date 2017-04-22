
import React from 'react'
import {
    Form, FormGroup, ControlLabel, FormControl, Button, Panel
} from 'react-bootstrap'
import {reduxForm} from "redux-form";
import ReactTooltip from 'react-tooltip';


class Search extends React.Component {
    /*constructor(props){
        super(props);
        this.state = {form : {}};
        this.handleSubmit = props;
        //this.Search = this.Search.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(form){
        form.preventDefault();
        this.props.onFormSubmit(form);
        console.log(form);
        console.log(data);
    }*/
    render() {
        const domOnlyProps = ({
                                  initialValue,
                                  autofill,
                                  onUpdate,
                                  valid,
                                  invalid,
                                  dirty,
                                  pristine,
                                  active,
                                  touched,
                                  visited,
                                  autofilled,
                                  error,
                                  ...domProps }) => domProps;
        const { fields : {name, type},handleSubmit } = this.props;
        return (

                    <Panel className="container main">
                        <h2>Search</h2>
                    <div className="row search">
                        <Form inline onSubmit={handleSubmit} className="inline">

                                            <FormGroup controlId="name" role="form">
                                                <div className="group">
                                                    <input type="text" placeholder=" " {...domOnlyProps(name)}/>
                                                    <span className="highlight"/>
                                                    <span className="bar"/>
                                                    <label>Name</label>

                                                </div>

                                            </FormGroup>

                                            {' '}
                                            <FormGroup controlId="type">
                                                <div className="group">
                                                    <input type="text" placeholder=" " data-offset="{'top': 5}" data-multiline="true" data-effect="solid" data-tip="Will add a list of options later.<br /> Try Exalted Orb, Ancient Reliquary Key, Vaal Regalia, etc"{...domOnlyProps(type)}/>
                                                    <span className="highlight"/>
                                                    <span className="bar"/>
                                                    <label>Type / Base</label>
                                                    <ReactTooltip/>
                                                </div>
                                            </FormGroup>
                                            {' '}
                                            <div className="row col-md-12">
                                            <Button block className="btn btn-primary btn-large centerButton top20 black" id="searchButton" type="submit">
                                                SEARCH
                                            </Button>
                                            </div>
                                        </Form>

                    </div>
                    </Panel>

        );
    }

}

/*
 <ControlLabel>Name</ControlLabel>
 {' '}
 <input type="text" placeholder="" value="" className="form-control right10" />
 <div className="text-help">{name.error}</div>
 */
function validate(values) {

    const errors = {};
    if (!values.name && !values.type){
        errors.name = 'Enter a type or a name';
    }
    return errors;
}

export default reduxForm({
    form: 'Search',
    fields: ['name', 'type']
    //validate
})(Search);