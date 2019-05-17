import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Button, Modal} from "semantic-ui-react";
import {Composemail} from "./composemail";

type IState = {
    composeMailVisible: boolean
}
type IProps = {
    onNavigaton: (link: string) => any
}

export class Sidenav extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            composeMailVisible: false
        }
    }

    render() {
        return (
            <div className="side-navigation">
                <div className='title-nav'>
                    <i className="envelope outline icon env-ico"></i>
                    <span>Mailbox</span>
                    <Modal trigger={<Button basic color='teal' className='cmp-btn' onClick={() => this.setState({ composeMailVisible: true })}>Compose</Button>}>
                        <Composemail />
                    </Modal>
                </div>
                <div className='opt-btns'>
                    <Button content='Inbox' icon='inbox' labelPosition='left' secondary className='btn' onClick={e => {this.props.onNavigaton('inbox')}}/>
                    <Button content='Outbox' icon='envelope open outline' labelPosition='left' secondary className='btn' onClick={e => {this.props.onNavigaton('outbox')}}/>
                </div>
            </div>
        )
    }
}
