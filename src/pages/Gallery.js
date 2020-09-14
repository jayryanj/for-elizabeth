import React from 'react';
import { Segment, Image, Container, Grid, GridColumn, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css';

class Gallery extends React.Component {
    render() {
        return (
            <div>
                <Header as='h2' className='gallery-header' inverted>
                    Gallery
                </Header>
                <Container>
                    <p className='gallery-description'>
                        Pictures of her along with loved ones.
                    </p>
                </Container>
                <Segment className="landing-main" style={{ minHeight: 400, padding: '1em 0em' }}>
                    <Container>
                            <Grid className='gallery-grid' centered>
                                <Grid.Row columns={3}>
                                    {/* Column 1 */}
                                    <GridColumn className='gallery-grid-column'>
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/_20190815-20190815_111721.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/_IMG_60111(1).jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/_2020-08-31_173711.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/DSC_0246.JPG')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les4b.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les7a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les10a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les13b.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les18a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les20a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les23a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les26a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les29a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les32a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les34a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les39a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les42a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les47a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les55a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les58a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les73a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les79a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les82a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les85a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les88a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les103a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les116a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les120a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les123a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les126a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les131a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les134a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les136a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les139a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les142a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les146a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les149a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les153a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les157a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les160a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les162a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les165a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les168a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les171a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les174a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les185a.jpg')} />

                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/20200822_151957.jpg')} />
                                    </GridColumn>

                                    {/* Column 2*/}
                                    <GridColumn className='gallery-grid-column'>
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/_20200828-2020-08-28_122549 (Restored).jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/_Les130a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/_Les117a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/DSC_0241.JPG')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les3a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les6b.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les9a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les12a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les15b.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les17a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les21a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les24a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les25a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les28a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les31a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les35a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les37a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les40a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les43a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les45a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les54a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les57a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les71a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les76a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les80a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les84a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les87a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les92a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les104a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les112a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les118a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les122a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les125a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les129a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les132a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les138a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les140a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les143a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les147a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les150a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les155a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les159a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les163a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les166a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les169a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les172a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les175a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les177a.jpg')} />

                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/20200822_161345.jpg')} />
                                    </GridColumn>

                                    {/* Column 3 */}
                                    <GridColumn className='gallery-grid-column'>
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/_Les100a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/_Les109a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-27_185329.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les133a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/20140309_204308.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/DSC00493.JPG')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les2a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les5b.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les8a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les11a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les14a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les16a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les19a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les22a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les27a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les30a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les33a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les36a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les38a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les41a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les44a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les46a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les50a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les72a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les74a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les81a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les83a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les86a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les89a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les107a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les114a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les119a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les121a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les124a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les127a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les135a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les137a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les141a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les145a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les148a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les151a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les154a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les158a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les161a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les164a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les167a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les170a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les173a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les176a.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/Les182a.jpg')} />

                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/20200822_162000(0).jpg')} />
                                    </GridColumn>
                                </Grid.Row>
                            </Grid>
                    </Container>
                </Segment>
            </div>

        );
    }
}

export default Gallery;

/**
             <Segment
            className="landing-main"
            style={{ minHeight: 400, padding: '1em 0em' }}
            >
                <Container>
                    <Card.Group itemsPerRow={4}>
                        <Card raised image={require('../resources/img/2020-08-27_155758 (square).jpg')} />
                        <Card raised image={require('../resources/img/2020-08-28_113813 (square).jpg')} />
                        <Card raised image={require('../resources/img/2020-08-27_155758 (square).jpg')} />
                        <Card raised image={require('../resources/img/2020-08-28_113813 (square).jpg')} />                <Card raised image={require('../resources/img/2020-08-27_155758 (square).jpg')} />
                        <Card raised image={require('../resources/img/2020-08-28_113813 (square).jpg')} />                <Card raised image={require('../resources/img/2020-08-27_155758 (square).jpg')} />
                        <Card raised image={require('../resources/img/2020-08-28_113813 (square).jpg')} />                <Card raised image={require('../resources/img/2020-08-27_155758 (square).jpg')} />
                        <Card raised image={require('../resources/img/2020-08-28_113813 (square).jpg')} />
                    </Card.Group>
                </Container>

        </Segment>



                                <GridColumn>
                            <Image className='gallery-picture'  src={require('../resources/img/2020-08-27_155758 (square).jpg')} />
                            <Image className='gallery-picture' src={require('../resources/img/gallery/2020-08-27_153901.jpg')} />
                            <Image className='gallery-picture' src={require('../resources/img/gallery/2020-08-27_154231.jpg')} />
                        </GridColumn>
                        <GridColumn>
                            <Image className='gallery-picture' src={require('../resources/img/2020-08-27_155758 (square).jpg')} />
                            <Image className='gallery-picture' src={require('../resources/img/gallery/2020-08-27_153901.jpg')} />
                            <Image className='gallery-picture' src={require('../resources/img/gallery/2020-08-27_154231.jpg')} />
                        </GridColumn>

 */