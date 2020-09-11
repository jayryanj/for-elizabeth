import React from 'react';
import { Segment, Header, Image, Visibility, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css';
import Portrait from '../components/Portrait';

class Landing extends React.Component {

    handleOnScreen(e) {

    }
    
    render() {
        return (
            <div>
                <Portrait />
                <Segment
                    className="landing-main"
                    style={{ minHeight: 400, padding: '1em 0em' }}
                >
                    <Container className='landing-main-header-container'>
                        <p className="landing-main-header">
                            A Loving <p className="landing-main-mom">Mom</p>
                        </p>
                    </Container>

                    <p className="landing-main-description">"She was a caring, loving, and kindhearted mom that loved her family. She loved talking to her siblings and seeing her kids around the house. She enjoyed even the smallest bits of her life while still looking forward to the future. [Needs to be expanded]" </p>
                    <Visibility
                        onOnScreen={this.handleOnScreen}
                    >
                        <Image.Group className="landing-main-pictures" centered size='small'>
                            <Image src={require('../resources/img/2020-08-27_155758 (square).jpg')} />
                            <Image src={require('../resources/img/2020-08-28_113813 (square).jpg')} />
                            <Image src={require('../resources/img/20190815-20190815_111721 (square).jpg')} />
                            <Image src={require('../resources/img/2020-08-27_180800 (square).jpg')} />
                            <Image src={require('../resources/img/IMG_60111(square).jpg')} />
                        </Image.Group>
                    </Visibility>
 
                </Segment>
            </div>
        );
    }
}

export default Landing;