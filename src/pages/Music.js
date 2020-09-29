import React from 'react';
import { Segment, Header, Container, Embed, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css';


class Music extends React.Component {
    render() {
        return(
            <div>
                <Header as='h2' className='music-header' inverted>
                    Music
                </Header>
                <Container>
                    <p className='music-description'>
                        One thing that Elizabeth loved... was music. She absolutely loved listening to music. Here, you can listen to a preview of her playlist. To access her entire Spotify playlist (over 1,000 songs), you must log into Spotify. To begin, click on the play button below.
                    </p>
                </Container>

                <Segment className="landing-main" style={{ padding: '1em 0em' }}>

                <Container>
                    <Message warning>
                        <Message.Header>WARNING: EXTREMELY LOUD MUSIC</Message.Header>
                        <p>
                            Lower your volume before playing!
                        </p>
                    </Message>
                    <Embed
                        url='https://open.spotify.com/embed/playlist/0amEoTB3KgiYdonyDKV7Tm'
                    />
                </Container>

                </Segment>
            </div>
        );
    }
}

export default Music;