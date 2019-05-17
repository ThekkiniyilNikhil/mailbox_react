import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Sidenav} from "./sidenav";
import {Inbox} from "./inbox";
import {Outbox} from "./outbox";

type IState = {
    currPage: string
}

export class App extends React.Component<{}, IState>{

    public static init(element: HTMLElement){
        ReactDOM.render(<App />, element);
    }

    constructor(props: {}) {
        super(props);
        this.state = {
            currPage: 'inbox'
        }
    }

    changeNavigation() {
        switch (this.state.currPage) {
            case 'inbox': return ( <Inbox /> );
            case 'outbox': return ( <Outbox /> );
        }
    }

    public render() {
        return (
            <div className="App">
                <Sidenav onNavigaton={link => {this.setState({currPage: link})}} />
                {this.changeNavigation()}
            </div>
        )
    }
}