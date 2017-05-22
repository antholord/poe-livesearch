import React from 'react'
import {
    Form, FormGroup, Button, Panel
} from 'react-bootstrap'
import {Field, FieldArray, reduxForm} from "redux-form";
import Toggle from 'react-toggle'
import VirtualizedSelect from 'react-virtualized-select'

import {Creatable} from "react-select";
import createFilterOptions from 'react-select-fast-filter-options';

import MinMaxGroup from './minmaxGroup'
import MinMaxModGroup from "./minmaxModGroup";
const  { DOM: { input} } = React;

let items = {};


const domOnlyProps = ({initialValue, autofill, onUpdate, valid, invalid, dirty, pristine, active, touched, visited, autofilled, error, ...domProps}) => domProps;
let itemsFilter;
let typesFilter;
let modsFilter;


const renderCreatableSelect = ({input, data, filter, ph}) => (
    <FormGroup controlId={input.name} role="form" className="col-md-12">
        <div className="group selectW bot20" style={{width: '100%'}}>
            <VirtualizedSelect
                filterOptions={filter}
                options={data}
                onChange={input.onChange}
                value={input.value}
                name={input.name}
                placeholder={ph}
                onBlur={() => input.onBlur(input.value)}
                autoBlur={true}
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
);

const renderSelect = ({input, data, filter, ph, size}) => (
    <FormGroup controlId={input.name} className={"col-md-" + size}>
        <div className="selectW bot20">
            <VirtualizedSelect
                filterOptions={filter}
                options={data}
                onChange={input.onChange}
                value={input.value}
                name={input.name}
                placeholder={ph}
                onBlur={() => input.onBlur(input.value)}
                simpleValue
                multi={false}
                clearable={false}
                onBlurResetsInput={false}
                onCloseResetsInput={false}
            />
        </div>
    </FormGroup>
);

const renderMods = ({fields, data}) => (
    <div>
            {fields.map((mod, index) => (
                <div key={index} className="inline modGroup">
                    <Field name={`${mod}.value`} component={renderSelect} size="9" data={data} filter={modsFilter} ph=""/>
                    <div className="col-md-2"><MinMaxModGroup parent={`${mod}`} wantHeader={false}/></div>
                    <div className="col-md-1">
                        <Button block className="btn btn-primary btn-large removeModBtn"
                                type="button" onClick={() => fields.remove(index)}>
                            X
                        </Button>
                    </div>
                </div>
            ))}

        <div className="row col-md-2 col-md-offset-5">
            <Button block className="btn btn-primary btn-large top20 black"
                id="modButton" type="button" onClick={() => fields.push({})}>
                Add a mod
            </Button>
        </div>
    </div>
);

const renderToggle = ({input}) => (
    <FormGroup controlId={input.name} className="padtop10">
    <span className="text">Buyout Only</span>
        <Toggle
           name={input.name}
           onChange={input.onChange}
           defaultChecked={false}
        />
    </FormGroup>
);


class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {items : {}, types : {}, mods : {}, buyoutOnly : false};
        this.loadItemsJSON = this.loadItemsJSON.bind(this);
        this.loadTypesJSON = this.loadTypesJSON.bind(this);
        this.loadModsJSON = this.loadModsJSON.bind(this);
        this.loadItemsJSON();
        this.loadModsJSON();
        this.loadTypesJSON();
    }
    //
    loadItemsJSON() {
        fetch("/api/items", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(result => {
                itemsFilter = createFilterOptions({ options : result.items });
                this.setState({items: result});
            });
    }
    loadTypesJSON() {
        fetch("/api/types", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(result => {
                typesFilter = createFilterOptions({ options : result.types });
                this.setState({types: result});
            });
    }
    loadModsJSON() {
        fetch("/api/mods", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(result => {
                modsFilter = createFilterOptions({ options : result.mods });
                this.setState({mods: result});
            });
    }
    render() {
        const { handleSubmit } = this.props;
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
                                </div>
                            </FormGroup>
                            <FormGroup controlId="subCategory" className="col-md-4">
                                <div className="selectW hidden">

                                </div>
                            </FormGroup>

                            <Field name="type" component={renderSelect} size="4" data={this.state.types.types} filter={typesFilter} ph="Type / Base"/>
                        </div>
                    </div>

                    <div className="row bot20">
                        <div className="col-md-12">
                           <Field name="name" component={renderCreatableSelect} data={this.state.items.items} filter={itemsFilter} ph="Name"/>
                        </div>
                    </div>
                    <div className="row top40" style={{paddingLeft:'15px'}}>
                        <div className="col-md-12 inline" >
                            <MinMaxGroup minMaxName="Sockets" header="Sockets" wantHeader={true}/>
                            <MinMaxGroup minMaxName="Links" header="Links" wantHeader={true}/>
                        </div>
                    </div>
                    <Panel className="mainPanel">
                        <div className="row inline">
                            <h3 className="inline">Mods</h3>
                        </div>
                    <div className="row top10" style={{paddingLeft:'15px'}}>
                        <div className="col-md-12 inline" >
                            <FieldArray name="mods" component={renderMods} data={this.state.mods.mods}/>
                        </div>
                    </div>
                    </Panel >
                    <div className="row inline">
                        <h3 className="">Misc</h3>
                    </div>
                    <Panel className="mainPanel">

                        <div className="col-md-12">
                            <div className="col-md-3">
                                <Field
                                    name="buyoutOnly"
                                    component={renderToggle}
                                />
                            </div>
                            <div className="col-md-2">
                                <MinMaxGroup minMaxName="Buyout" header="Buyout (Chaos only)" wantHeader={true}/>
                            </div>
                        </div>
                    </Panel>
                    <div className="col-md-12">
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
        errors.minIlvl = 'minIlvl must be valid';
    }
    if (values.maxIlvl && !(values.maxIlvl >= 2 && values.maxIlvl <= 200)) {
        errors.maxIlvl = 'maxIlvl must be valid';
    }
    console.log(values.mods);
    return errors;
}

export default reduxForm({
    form: 'Search',
   // fields: ['name', 'category', 'subCategory', 'type', 'minSockets', 'maxSockets', 'minLinks', 'maxLinks', 'minIlvl', 'maxIlvl'],
    validate: validate,
    initialValues: {
        mods : [{min : "", max : "", value : ""}]
    }
})(Search);