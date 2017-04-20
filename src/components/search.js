
import React from 'react'
import {
    Form, FormGroup, ControlLabel, FormControl, Button, Panel
} from 'react-bootstrap'
import {reduxForm} from "redux-form";



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
                    <div className="row search">
                        <Form inline onSubmit={handleSubmit} className="inline">

                                            <FormGroup controlId="name" role="form">
                                                <ControlLabel>Name</ControlLabel>
                                                {' '}
                                                <input type="text" placeholder="" value="" className="form-control right10" {...domOnlyProps(name)}/>
                                                <div className="text-help">{name.error}</div>
                                            </FormGroup>
                                            {' '}
                                            <FormGroup controlId="type">
                                                <ControlLabel>Type</ControlLabel>
                                                {' '}
                                                <input type="text" placeholder="" className="form-control right10" {...domOnlyProps(type)}/>
                                                <div className="text-help">{type.error}</div>
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

function validate(values) {
    console.log(values);
    const errors = {};
    if (!values.name && !values.type){
        errors.name = 'Enter a type or a name';
        //errors.type = 'Enter a type or a name';
    }
    return errors;
}

export default reduxForm({
    form: 'Search',
    fields: ['name', 'type']
    //validate
})(Search);