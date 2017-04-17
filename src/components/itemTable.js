/**
 * Created by Anthony Lord on 2017-04-14.
 */
import React from 'react';
import LiveFeed from "./livefeed";

class ItemTable extends React.Component {
    render() {
        console.log('rendering table');
        return (
            <div className="container main">
                <table>
                    <thead>
                    <tr>
                        <th>Icon</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    {this.props.rows}
                </table>

            </div>
        );
    }
}

export default ItemTable;
