import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
    let sum = data.reduce((prev, cur) => prev + cur);

    return Math.round(sum / data.length);
}

export default props => {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} {props.unit}</div>
        </div>
    )
}