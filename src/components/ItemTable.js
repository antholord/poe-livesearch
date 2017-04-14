/**
 * Created by Anthony Lord on 2017-04-14.
 */
import React from 'react';
import LiveFeed from './components/livefeed.jsx';





class ProductTable extends React.Component {
    render() {
        var rows = [];
        return (
            <table>
                <thead>
                <tr>
                    <th>Icon</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}