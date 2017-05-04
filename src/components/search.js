import React from 'react'
import {
    Form, FormGroup, Button, Panel
} from 'react-bootstrap'
import {reduxForm} from "redux-form";

import VirtualizedSelect from 'react-virtualized-select'
import dataItems from '../data/itemsfmt.json';

import topCategories from '../data/topCategories.json'
import subCategories from '../data/subCategories.json'
import bases from '../data/bases.json'
import {Creatable} from "react-select";


const domOnlyProps = ({initialValue, autofill, onUpdate, valid, invalid, dirty, pristine, active, touched, visited, autofilled, error, ...domProps}) => domProps;

class Search extends React.Component {
    render() {

        const {fields: {name, category, subCategory, type, minSockets, maxSockets, minLinks, maxLinks, minIlvl, maxIlvl}, handleSubmit} = this.props;
        return (

            <Panel className="container main">
                <div className="row inline">
                    <h2 className="inline">Search</h2>
                </div>

                <Form inline onSubmit={handleSubmit} className="inline">
                    <div className="row">
                        <div className="top15 search col-md-12">
                            <FormGroup controlId="category" className="col-md-4">
                                <div className="selectW hidden">
                                    <VirtualizedSelect
                                        {...domOnlyProps(category)}
                                        options={topCategories.topCategories}
                                        onChange={category.onChange}
                                        value={category.value}
                                        name="category"
                                        placeholder="Category"
                                        onBlur={() => category.onBlur(category.value)}
                                        simpleValue
                                        multi={false}
                                        clearable={false}
                                        onBlurResetsInput={false}
                                        onCloseResetsInput={false}
                                    />
                                </div>
                            </FormGroup>
                            <FormGroup controlId="subCategory" className="col-md-4">
                                <div className="selectW hidden">
                                    <VirtualizedSelect
                                        {...domOnlyProps(subCategory)}
                                        options={subCategories.subCategories}
                                        onChange={subCategory.onChange}
                                        value={subCategory.value}
                                        name="subCategory"
                                        placeholder="Sub Category"
                                        onBlur={() => subCategory.onBlur(subCategory.value)}
                                        simpleValue
                                        multi={false}
                                        clearable={false}
                                        onBlurResetsInput={false}
                                        onCloseResetsInput={false}
                                    />
                                </div>
                            </FormGroup>

                            <FormGroup controlId="type" className="col-md-4">
                                <div className="selectW">
                                    <VirtualizedSelect
                                        {...domOnlyProps(type)}
                                        options={bases.bases}
                                        onChange={type.onChange}
                                        value={type.value}
                                        name="type"
                                        placeholder="Base"
                                        onBlur={() => type.onBlur(type.value)}
                                        simpleValue
                                        multi={false}
                                        clearable={false}
                                        onBlurResetsInput={false}
                                        onCloseResetsInput={false}
                                    />
                                </div>
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                    <FormGroup controlId="name" role="form" className="col-md-12">
                        <div className="group selectW" style={{width: '100%'}}>
                            <VirtualizedSelect
                                {...domOnlyProps(name)}
                                options={dataItems.items}
                                onChange={name.onChange}
                                value={name.value}
                                name="name"
                                placeholder="Name"
                                onBlur={() => name.onBlur(name.value)}
                                simpleValue={true}
                                multi={true}
                                clearable={false}
                                onBlurResetsInput={false}
                                onCloseResetsInput={false}
                                delimiter="|"
                                showNewOptionAtTop={false}
                                selectComponent={Creatable}
                                promptTextCreator={(label) => {return "Search for " + label}}

                            />
                        </div>
                    </FormGroup>
                    </div>
                    </div>
                    <div className="row top10" style={{paddingLeft:'15px'}}>
                        <div className="col-md-12" >
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
                        </div>
                    </div>
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


            </Panel>

        );
    }

}

function validate(values) {

    const errors = {};
    if (!values.name && !values.type && !values.subCategory && !values.category) {
        errors.name = 'Enter a type, category or name';
    }
    if (values.minSockets && !(values.minSockets >= 1 && values.minSockets <= 6)) {
        errors.minSockets = 'minSockets must be between 1 and 6';
    }
    if (values.maxSockets && !(values.maxSockets >= 1 && values.maxSockets <= 6)) {
        errors.maxSockets = 'maxSockets must be between 1 and 6';
    }
    if (values.minLinks && !(values.minLinks >= 2 && values.minLinks <= 6)) {
        errors.minLinks = 'minLinks must be between 2 and 6';
    }
    if (values.maxLinks && !(values.maxLinks >= 2 && values.maxLinks <= 6)) {
        errors.maxLinks = 'maxLinks must be between 2 and 6';
    }
    if (values.minIlvl && !(values.minIlvl >= 1 && values.minIlvl <= 200)) {
        errors.minIlvl = 'minIlvl must be between 2 and 6';
    }
    if (values.maxIlvl && !(values.maxIlvl >= 2 && values.maxIlvl <= 200)) {
        errors.maxIlvl = 'maxIlvl must be between 2 and 6';
    }
    return errors;
}

export default reduxForm({
    form: 'Search',
    fields: ['name', 'category', 'subCategory', 'type', 'minSockets', 'maxSockets', 'minLinks', 'maxLinks', 'minIlvl', 'maxIlvl'],
    validate: validate
})(Search);