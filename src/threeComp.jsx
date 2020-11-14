import React from 'react';
import Header2 from './header2';
import Imgs from './image';
import Carosal from './carousal';
import Cardd from './cardds';

export default class ThreeComp extends React.Component {
    render() {
        return (
            <div>
                <Header2 />
                <Imgs />
                <Carosal />
                <Cardd />
            </div>
        );
    }
}