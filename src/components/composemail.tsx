import * as React from 'react';
import {Button, Form, Input, TextArea} from "semantic-ui-react";

export class Composemail extends React.Component {
    constructor(props: {}) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className='content-modal'>
                <Form>
                    <Input placeholder='To' className='text-input' />
                    <Input placeholder='Subject' className='text-input' />
                    <TextArea placeholder='Write your message here' className='text-area' />
                    <div className='form-btn-wrpr'>
                        <Button content='Send' icon='send' labelPosition='left' color='teal' />
                    </div>
                </Form>
            </div>
        )
    }
}