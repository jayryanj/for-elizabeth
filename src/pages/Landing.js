import React from 'react';
import { Segment, Image, Visibility, Container } from 'semantic-ui-react';
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
                    style={{ padding: '1em 0em' }}
                >
                    <Container className='landing-main-header-container'>
                        <p className="landing-main-header">
                            A Loving <p className="landing-main-mom">Mom</p>
                        </p>
                    </Container>

                    <Container className="landing-main-description">
                        <p >
                            Please join us in honoring the memory of Elizabeth Domingsil Jamorabon. 
                        </p>

                        <p>
                            It broke all of our hearts when the news broke out of Elizabeth's passing on August 22, 2020. She was a caring mom, wife, and daughter that loved her family more than anything in the world. She was a kindhearted spirit that left her mark on all of her loved-ones.
                        </p>
                        <p>
                            She will be greatly missed.
                        </p>
                    </Container>

                
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

/*
 
                        <p>
                            Elizabeth was a caring, loving, and kindhearted mom, wife, and daughter that loved her family more than anything in the world. She enjoyed even the simplest bits of her life such as the music that she loved and the snacks that she always craved. However, nothing compares to the love that she had for her family. She loved talking to her siblings and seeing her kids around the house. She'd rarely miss a chance to see her family. Although we may be apart, we know her love 
                        </p>
 */