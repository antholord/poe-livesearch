import React from 'react'
import {
    Form, FormGroup, Button, Panel
} from 'react-bootstrap'
import {reduxForm} from "redux-form";
import ReactTooltip from 'react-tooltip';


class Search extends React.Component {

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
                                  ...domProps
                              }) => domProps;
        const {fields: {name, type, minSockets, maxSockets, minLinks, maxLinks, minIlvl, maxIlvl}, handleSubmit} = this.props;
        return (

            <Panel className="container main">

                <div className="row inline">
                    <h2 className="inline">Search</h2>
                    <span>Use exact names (case sensitive)</span>
                </div>
                <div className="row top15 search">

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
                                <input type="text" placeholder=" " data-offset="{'top': 5}" data-multiline="true"
                                       data-effect="solid"
                                       data-tip="Will add a list of options later.<br /> Try Exalted Orb, Ancient Reliquary Key, Vaal Regalia, etc"{...domOnlyProps(type)}/>
                                <span className="highlight"/>
                                <span className="bar"/>
                                <label>Type / Base</label>
                                <ReactTooltip/>
                            </div>
                        </FormGroup>
                        {' '}
                        <div><br/></div>

                        <FormGroup controlId="minSockets">
                            <div className="minmax group">
                                <div className="minmaxHeader">Sockets</div>
                                <input type="text" placeholder=" " name="minSockets" {...domOnlyProps(minSockets)}/>

                                <label>min</label>
                            </div>
                        </FormGroup>
                        <FormGroup controlId="maxSockets">
                            <div className="minmax group right10">
                                <input type="text" placeholder=" " {...domOnlyProps(maxSockets)}/>
                                <label>max</label>
                            </div>
                        </FormGroup>

                        <FormGroup controlId="minLinks">
                            <div className="minmax group">
                                <div className="minmaxHeader">Links</div>
                                <input type="text" placeholder=" " {...domOnlyProps(minLinks)}/>
                                <label>min</label>
                            </div>
                        </FormGroup>
                        <FormGroup controlId="maxLinks">
                            <div className="minmax group right10">
                                <input type="text" placeholder=" " {...domOnlyProps(maxLinks)}/>
                                <label>max</label>
                            </div>
                        </FormGroup>

                        <FormGroup controlId="minIlvl">
                            <div className="minmax group">
                                <div className="minmaxHeader">Ilvl</div>
                                <input type="text" placeholder=" " {...domOnlyProps(minIlvl)}/>
                                <label>min</label>
                            </div>
                        </FormGroup>
                        <FormGroup controlId="maxIlvl">
                            <div className="minmax group right10">
                                <input type="text" placeholder=" " {...domOnlyProps(maxIlvl)}/>
                                <label>max</label>
                            </div>
                        </FormGroup>

                        <div className="row text-center f30 corrupted">
                            <p>{minSockets.error}</p>
                            <p>{maxSockets.error}</p>
                            <p>{minLinks.error}</p>
                            <p>{maxLinks.error}</p>
                            <p>{minIlvl.error}</p>
                            <p>{maxIlvl.error}</p>

                        </div>

                            <div className="row col-md-12">
                            <Button block className="btn btn-primary btn-large centerButton top20 black"
                                    id="searchButton" type="submit">
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

    const errors = {};
    if (!values.name && !values.type) {
        errors.name = 'Enter a type or a name';
    }
    if (values.minSockets && !(values.minSockets>=1 && values.minSockets<=6)){
        errors.minSockets = 'minSockets must be between 1 and 6';
    }
    if (values.maxSockets && !(values.maxSockets>=1 && values.maxSockets<=6)){
        errors.maxSockets = 'maxSockets must be between 1 and 6';
    }
    if (values.minLinks && !(values.minLinks>=2 && values.minLinks<=6)){
        errors.minLinks = 'minLinks must be between 2 and 6';
    }
    if (values.maxLinks && !(values.maxLinks>=2 && values.maxLinks<=6)){
        errors.maxLinks = 'maxLinks must be between 2 and 6';
    }
    if (values.minIlvl && !(values.minIlvl>=1 && values.minIlvl<=200)){
        errors.minIlvl = 'minIlvl must be between 2 and 6';
    }
    if (values.maxIlvl && !(values.maxIlvl>=2 && values.maxIlvl<=200)){
        errors.maxIlvl = 'maxIlvl must be between 2 and 6';
    }
    
    return errors;
}

export default reduxForm({
    form: 'Search',
    fields: ['name', 'type', 'minSockets', 'maxSockets', 'minLinks', 'maxLinks', 'minIlvl', 'maxIlvl'],
    validate: validate
})(Search);