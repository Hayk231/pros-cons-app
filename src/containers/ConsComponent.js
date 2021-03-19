import React, {useState} from 'react';
import {controlledList} from "../Utils/Controller";
import ListContainer from "../Utils/ListContainer";

const ConsComponent = () => {

    const [consList, setConsList] = useState(['Makes me fat', 'Too expensive', 'Too expensive', '']);

    const changeFunction = (e, index) => {
        e.preventDefault();
        let changedList = controlledList(consList, e.target.value, index)
        setConsList(changedList)
    }

    return (
        <ListContainer list={consList} label={'CONS'} changeFunction={changeFunction}/>
    );
};

export default ConsComponent;