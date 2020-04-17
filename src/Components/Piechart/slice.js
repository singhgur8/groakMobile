import React, {Component} from 'react';
import {Path} from 'react-native-svg';
import * as shape from 'd3-shape';
import { View, Text } from 'react-native';
const d3 = {shape};

export default class Slice extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.arcGenerator = d3.shape.arc()
            .outerRadius(100)
            .innerRadius(80)
            .cornerRadius(6)
            .padAngle(80)
            .padRadius(3);
    }


    createPieArc = (index, endAngle, data) => {

        const arcs = d3.shape.pie()
            .sort(null)
            .value((item)=>item.number)
            .startAngle(0)
            .endAngle(endAngle)
            (data);

        let arcData = arcs[index];

        return this.arcGenerator(arcData);
    };


    render() {

        const {
            endAngle,
            color,
            index,
            data,
            animData,
            ratio
        } = this.props;

        data[index].number = animData

        return (
            <Path
                onPress={()=>alert(`${Math.floor(ratio*100)}% people want ${data[index].name}`)}
                d={this.createPieArc(index, endAngle, data)}
                fill={color}
            />
        )

    }
}