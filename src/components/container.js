import React from 'react';
import LiveFeed from "./livefeed";
import Header from "./header.js";
import Search from "./search";


class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {league : "Hardcore Legacy"/*, form : {name : "", type : ""}*/};
        this.onSubmit = this.onSubmit.bind(this);
    };

    onSubmit(form) {
        if (!form || (!form.name && !form.type)){
            this.setState({form : {error : 1}})
        }else{
            this.setState({form});
        }
    };


    render(){
        let key = '1';
        if (this.state.form){
            key = this.state.form.name+this.state.form.type;
        }
        return (
                <div>
                <Header league={this.state.league} onLeagueChange={league => this.setState({league})}/>
                <Search  onSubmit={this.onSubmit}/>
                <LiveFeed league={this.state.league} form={this.state.form} rows = {[]} key={key}/>
                </div>
        );
    };
}

export default Container;