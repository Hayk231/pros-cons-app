import React, {useState} from 'react';
import '../App.scss';
import {controlledList} from "../Utils/Controller";
import ListContainer from "../Utils/ListContainer";

const ProsComponent = () => {

    const [prosList, setProsList] = useState([`I like it`, `It's really tasty`, `It's really tasty`, '']);

    const changeFunction = (e, index) => {
        e.preventDefault();
        let changedList = controlledList(prosList, e.target.value, index)
        setProsList(changedList)
    }

    return (
        <ListContainer list={prosList} label={'PROS'} changeFunction={changeFunction}/>
    );
}

export default ProsComponent;