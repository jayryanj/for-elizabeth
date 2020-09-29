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
                <Message info className='funeral-info-message' floating>

                    <Message.Header>Funeral Information</Message.Header>
                    <Container className='funeral-info-container'>
                        <p >
                            Please join us in honoring the memory of Elizabeth Domingsil Jamorabon on Saturday, October 3rd @ 9:30am
                        </p>
                        <p>
                            Due to the COVID-19 pandemic restrictions, the funeral service will only include 10 family members. However, the funeral will be streamed at the link below
                        </p>

                        <Divider className='funeral-info-divider' />

                            <p>
                                Memorial ID: 37174
                            </p>
                            <p>
                                Password: 54Z8K
                            </p>
                            <a rel="noopener noreferrer" target='_blank' href='http://webcast.funeralvue.com/events/login/37174'>
                                <Button>
                                    Livestream Link
                                </Button>
                            </a>
                    </Container>

                </Message>
            </Container>

        );
    }
}

export default FuneralInfo