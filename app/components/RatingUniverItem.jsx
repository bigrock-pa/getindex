import React from 'react';

const RatinUniverItem = (props) => {
    return (

        <tr className="ratinguniver-item">
            <td>
                {props.univer.name ? props.univer.name : '-'}
            </td>
            <td>
                {props.univer.name_en ? props.univer.name_en : '-'}
            </td>
            <td>
                <a href={props.univer.url} target="_blank">{props.univer.url}</a>
            </td>
            <td>
                {props.univer.min_points}
            </td>
            <td>
                {props.univer.our_points}
            </td>
            <td>
                {props.univer.top}
            </td>
        </tr>

    );
};

export default RatinUniverItem;