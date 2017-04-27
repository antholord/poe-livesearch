
import React from 'react';
import LiveFeed from "./livefeed";
import Header from "./header.js";
import Search from "./search";


class Container extends React.Component {

    constructor(props){
        super(props);
        if (localStorage.getItem('league') === null) {localStorage.setItem('league', 'Legacy');}
        let _league = localStorage.getItem('league');
        this.state = {league : _league};
        this.onSubmit = this.onSubmit.bind(this);
        this.onLeagueChange = this.onLeagueChange.bind(this);
        console.log(_league);
    };

    onSubmit(form) {
        if (!form || (!form.name && !form.type)){
            this.setState({form : {error : 1}})
        }else{
            console.log(form);
            this.setState({form});
        }
        ga('set', 'page', '/search/');
        ga('send', 'pageview');
    };

    onLeagueChange(league) {
        localStorage.setItem('league', league);
        this.setState({league});
    }
    render(){
        let key = '1';
        if (this.state.form){
            key = this.state.form.name+this.state.form.type;
        }
        return (
                <div>
                <Header league={this.state.league} onLeagueChange={this.onLeagueChange}/>
                <Search  onSubmit={this.onSubmit}/>
                <LiveFeed league={this.state.league} form={this.state.form} rows = {[]} localRows = {[]} key={key}/>
                </div>
        );
    };
}

export default Container;