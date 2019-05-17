import * as React from 'react';

export class Inbox extends React.Component {

    constructor(props: {}) {
        super(props);
        this.state = {

        }
    }

    render() {
        let people = [
            {
                thumb: 'A',
                name: 'Tom',
                content: 'lorem ipsum dolor sit amet'
            },
            {
                thumb: 'B',
                name: 'Hanks',
                content: 'lorem ipsum dolor sit amet'
            },
            {
                thumb: 'C',
                name: 'Brad',
                content: 'lorem ipsum dolor sit amet'
            },
            {
                thumb: 'D',
                name: 'Pitt',
                content: 'lorem ipsum dolor sit amet'
            }
        ];

        return (
            <div className="list-container ">
                <h1>Inbox</h1>
                <ul>
                    {people.map((data, index) => {
                        return (
                            <li key={index}>
                                <div className='thumb'>{data.thumb}</div>
                                <div>
                                    <h2>{data.name}</h2>
                                    <p>{data.content}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
