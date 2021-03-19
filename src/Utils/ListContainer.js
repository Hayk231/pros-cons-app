import React from 'react';

const ListContainer = ({label, list, changeFunction}) => {
    return (
        <div className='single_content'>
            <div className='single_content_label'>
                {label}
            </div>
            <div className="single_content_list_container">
                <ol>
                    {
                        list.map((el, index) => {
                            return (
                                <li key={index}>
                                    <input onChange={(e) => changeFunction(e, index)}
                                           value={el}/>
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
        </div>
    );
};

export default ListContainer;