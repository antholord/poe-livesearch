/**
 * Created by Anthony Lord on 2017-04-14.
 */
import React from 'react';
import LiveFeed from "./livefeed";





class ItemTable extends React.Component {
    render() {
        console.log('rendering table');
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Icon</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>{this.props.rows}</tbody>
                </table>

            </div>
        );
    }
}

export default ItemTable;
