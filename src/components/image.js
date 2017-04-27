/**
 * Created by Anthony Lord on 2017-04-24.
 */
import React from 'react';
let r = {};

class Socket extends React.Component {
   /* constructor(props) {
        super(props);
        this.getClassColor = this.getClassColor.bind(this);
    }
    getClassColor() {

    }
*/
    render(){
        return (

            <div className={"socket socket-" + this.props.color + " socket-" + this.props.direction}/>
        );
    }
}
class Link extends React.Component {
    /* constructor(props) {
     super(props);
     this.getClassColor = this.getClassColor.bind(this);
     }
     getClassColor() {

     }
     */
    render(){
        return (

            <div className={"socket-link socket-link" + this.props.linkid}/>
        );
    }
}

class Image extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        r = this.props.item.Item;
        this.computeLinks = this.computeLinks.bind(this);
    }
    computeLinks() {
        let links = [];
        const direction = ['left','left','right right5','right','left','left'];
        if (!r.sockets){return null}
        let currGroup = -1;
        for (let i=0;i<r.sockets.length;i++){
            if (r.sockets[i].group === currGroup){ //Same group, need to add a link!
                links.push(<Link key={this.props.index+'-link'+(i)} linkid={i-1}/>);
            }else{
                currGroup = r.sockets[i].group;
            }
            links.push(<Socket color={r.sockets[i].attr} direction={direction[i]} pos={i} key={this.props.index+"-socket"+(i)}/>);
        }
       /* if (r.sockets[0]){
            return (
                    <div className="sockets">
                        <Socket color={r.sockets[0].attr} pos={0} key={0}/>
                    </div>
            );
        }*/
        return links;
    }

    render() {
        return (

                <div style={{position:'relative'}} className={"flex layout vertical item-heigth" + r.h + " item-width" + r.w}>
                    <img src={r.icon}/>
                    <div className="sockets">
                    {this.computeLinks()}
                    </div>
                </div>

        );
    }
}
export default Image;