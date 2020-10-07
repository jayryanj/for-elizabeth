import React from 'react';
import {
    Message,
    Container,
    Divider,
    Button
  } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css';

class FuneralInfo extends React.Component {
    render() {
        return(
            <Container>
                <Message className='funeral-info-message' floating>

                    <Message.Header>Funeral Video Information</Message.Header>
                    <Container className='funeral-info-container'>
                        <p >
                            On October 3rd, 2020, Elizabeth's beloved family came together at her funeral service to lay her to rest.
                        </p>
                        <p>
                            The livestreamed video of the service can be accessed using the button below for 90 days.
                        </p>

                        <Divider className='funeral-info-divider' />

                            <p>
                                Memorial ID: 37174
                            </p>
                            <p>
                                Password: 54Z8K 
                            </p>
                            <a rel="noopener noreferrer" target='_blank' href='http://webcast.funeralvue.com/events/login/37174'>
                                <Button secondary>
                                    Open  Livestream
                                </Button>
                            </a>
                    </Container>

                </Message>
            </Container>

        );
    }
}

export default FuneralInfo