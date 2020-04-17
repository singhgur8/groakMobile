import React, {Component} from 'react';
import {View, Text, Animated, StyleSheet, Button, Easing} from 'react-native';
import Svg, {G} from 'react-native-svg';
import Slice from './slice';
import Colors from '../../tools/Colors';

const AnimatedSlice = Animated.createAnimatedComponent(Slice);

// How will this look when the top 5 choices are constantly changing?...
// it might look a little funny cus colors might stay but names will change and not numbers
// because dont i want it to stay in the same order... as before, because only then will it keep its colors
// maybe i can use a hash map? to track position and color?


export default class Piechart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animValue: new Animated.Value(.1),
            animData: new Animated.Value(10),
        };
        // make the top 4 values be the top values that are my fav and state them
        // this way it will always be the same things with the same content, like favorites
        // last one will be others...but most of the time this will be more than the known vals
        // go thru props and assuming theyre sorted based on size, add them 1,2,3,4,5
        for (let idx = 0; idx < this.props.demoData.length; idx++){
            this.state[idx] = new Animated.Value(this.props.demoData[idx].number)
            this.state[idx+'name'] = this.props.demoData[idx].name
        } 
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

    increase = ()=>{
        // whenever i recieve new props, i need to compare to current ones, if there is a difference, then i need
        // to animate it, i need to see if new name or value have changed for their order

        Animated.timing(
            this.state.animData,
            {
                toValue: Math.random()*100,
                duration: 500,
                easing: Easing.inOut(Easing.quad)
            }
        ).start()
        console.log(this.state)
    }

    // static getDerivedStateFromProps(nextProps, prevProps){
    //     /// maybe i need to stop this from running the first time, cus its running on component did mount
    //     // basically animating the states as soon as theyre getting set? do i need to memoize it for that?


        
    //     for (let i = 0; i < nextProps.demoData.length; i++){
    //         if (nextProps.demoData[i].number !== prevProps){
    //             Animated.timing(
    //                 prevProps[i],
    //                 {
    //                     toValue: nextProps.demoData[i].number,
    //                     duration: 500,
    //                     easing: Easing.inOut(Easing.quad)
    //                 }
    //             ).start()
    //         }
    //     }
    //     return {}
    //     // for (let idx = 0; idx < this.props.demoData.length; idx++){
    //     //     this.state[idx] = new Animated.Value(this.props.demoData[idx].number)
    //     //     this.state[idx+'name'] = this.props.demoData[idx].name
    //     // } 
    // }

    componentDidUpdate(prevProps){
        // console.log(this.state)

        // for (let i = 0; i < this.props.demoData.length; i++){
        //     if (this.props.demoData[i].number !== prevProps[i]){
        //         Animated.timing(
        //             this.state[i],
        //             {
        //                 toValue: 50,
        //                 duration: 500,
        //                 easing: Easing.inOut(Easing.quad)
        //             }
        //         ).start()
        //     }
        // }
        console.log('compoent did still update?')
    }

    shouldComponentUpdate(prevProps){
        // should return true or false
        console.log('i ran')
        // push all the animations into an array, and then use animate paraell to make them all happen


        animationsArr = []
        // only animating the values yet, not the colors or names
        for (let i = 0; i < this.props.demoData.length; i++){
            if (this.props.demoData[i].number !== prevProps[i]){
                animationsArr.push(
                    Animated.timing(
                        this.state[i],
                        {
                            toValue: 25,
                            duration:500,
                            easing: Easing.inOut(Easing.quad)
                        }
                    )
                )

            }
        }

        Animated.parallel(animationsArr).start()

        console.log(animationsArr)

        return false
    }

    render() {
        let endAngle = Animated.multiply(this.state.animValue, Math.PI);

        // everytime new props come in, i need to update the index state of the prop
        // and name state, which is not yet created, and color state?? other wise it will change color automatically
        // but the pie also takes in the array so it can know the percentages of each slice
        // demoData = 

        // maybe it will help if this got its data from state and not props
        // console.log(this.state['0'])

        console.log('componente rendered')

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
                                <Text style={Colors.white}>{item.name}</Text>
                                <View style={{width:20, height:20, backgroundColor: item.color, marginLeft: 10, marginRight:10}}></View>
                            </View>
                        )
                    })}
                </View>
                <View style={{marginTop: 20}}>
                    <Button onPress={this.increase} title='increase'/>
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
