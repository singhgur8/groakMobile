import React, {Component} from 'react';
import {View, Text, Animated, StyleSheet, Button, Easing} from 'react-native';
import Svg, {G} from 'react-native-svg';
import Slice from './slice';
import Colors from '../../tools/Colors';

const AnimatedSlice = Animated.createAnimatedComponent(Slice);

// Bugs
// PERCENTAGES get off after the inital round

// Improvemnts: add transitions for the color and name
  // adding color animations got tricky (could just make it an animated value, may need interpolation), 
        // names may have worked but to limited colors because it was a string, animated value kept adding 0 at the end
        // which broke the fill property for each slice, unless it was a name like green0 which was fine.
        // can do the names easily though

export default class Piechart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animValue: new Animated.Value(.1),
        };

        for (let idx = 0; idx < this.props.demoData.length; idx++){
            this.state[idx] = new Animated.Value(this.props.demoData[idx].number)
        } 
        this.total = 0
        for (let item of props.demoData) this.total += item.number
    }

    componentDidMount(){
        this.animate()
    }

    resetPie = ()=>{
        this.state.animValue.setValue(0.1);
    };

    animate = ()=>{
        Animated.timing(
            this.state.animValue,
            {
                toValue: 2,
                duration: 1000,
                easing: Easing.inOut(Easing.quad)
            }
        ).start(()=>{
            // setTimeout(this.resetPie, 2000);
        });
    };

    shouldComponentUpdate(prevProps){
        animationsArr = []
        // only animating the values yet, not the colors or names
        for (let i = 0; i < this.props.demoData.length; i++){
            if (this.props.demoData[i].number !== prevProps[i]){
                newArr = true
                animationsArr.push(
                    Animated.timing(
                        this.state[i],
                        {
                            toValue: this.props.demoData[i].number,
                            duration: 1500,
                            easing: Easing.inOut(Easing.quad)
                        }
                    ).start()
                )
            }
        }

        Animated.stagger(1500,animationsArr) // its a little glitchy, tried sequence and paralell, work just the same

        this.total = 0
        for (let idx = 0; idx<this.props.demoData.length; idx++) {
            this.total += this.props.demoData[idx].number
        }

        return true
    }

    render() {
        let endAngle = Animated.multiply(this.state.animValue, Math.PI);

        return (
            <View style={styles.container}>
                <Svg
                    width={300}
                    style={styles.pieSVG}
                    height={300}
                    viewBox={`-100 -100 200 200`}
                >
                    <G>
                        {this.props.demoData.map( (item, index) =>{
                            return (
                                <AnimatedSlice
                                    ratio = {item.number/this.total}
                                    style={{backgroundColor:'white'}}
                                    animData = {this.state[index]}
                                    index={index}
                                    endAngle={endAngle}
                                    color={item.color}
                                    data={this.props.demoData}
                                    key={'pie_shape_' + index}
                                />
                            )
                        })}
                    </G>
                </Svg>
                <View style={{flexDirection:'row', marginTop:20}}>
                    {this.props.demoData.map((item,idx) => {
                        return (
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{color: Colors.white}}>{item.name}</Text>
                                <View style={{width:20, height:20, backgroundColor: item.color, marginLeft: 3, marginRight:15}}></View>
                            </View>
                        )
                    })}
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.transparent,
    },
    pieSVG: {
        flex: 1
    }
  });
