import React from 'react'
import { Form, Text } from 'react-form'
import LiveFeed from "./livefeed";

const myForm = (
    <div className="container main bot20">
        <div className="top-row row">
        <div className="col-md-12">
        <Form
            onSubmit={(values) => {
                console.log(values);

            }}
        >
            {({submitForm}) => {
                return (
                    <form onSubmit={submitForm} className="form-group row inline">
                        <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="searchLeague" className="col-md-3 top5 f22">League </label>
                                <Text field='league' className="form-control" type="text" value="Legacy" id="searchLeague"/>
                            </div>
                        <div className="col-md-6">
                            <label htmlFor="searchName" className="col-md-3 top5 f22">Name</label>
                            <Text field='name' className="form-control" type="text" value="Name" id="searchName"/>
                        </div>
                        </div>
                        <div className="row top-row">
                        <div className="col-md-6">
                            <label htmlFor="searchType" className="col-md-3 top5 f22">Type</label>
                            <Text field='type' className="form-control" type="text" value="Type" id="searchType"/>
                        </div>
                        </div>
                        <div className="row top-row">
                            <div className="col-md-12">
                        <button type="submit" className="btn btn-lg searchButton black top15">Search</button>
                            </div>
                        </div>
                    </form>
                )
            }}
        </Form>
        </div>
        </div>
    </div>
);

let sendFormToWebSocket = function(values){
    return (
        <LiveFeed/>
    )
};

class Search extends React.Component {
    render() {
        return (
            <div>
                {myForm}

            </div>
        );
    }

}


export default Search