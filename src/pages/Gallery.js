import React from 'react';
import { Segment, Image, Container, Grid, GridColumn, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css';
import { galleryColumnOne, galleryColumnTwo, galleryColumnThree } from '../resources/img/filenames';

class Gallery extends React.Component {
    render() {
        return (
            <div>
                <Header as='h2' className='gallery-header' inverted>
                    Gallery
                </Header>
                <Container>
                    <p className='gallery-description'>
                        Here, you can access pictures of Elizabeth and her loved ones.
                    </p>
                </Container>
                <Segment className="landing-main" style={{ minHeight: 400, padding: '1em 0em' }}>
                    <Container>
                            <Grid className='gallery-grid' centered>
                                <Grid.Row columns={3}>
                                    {/* Column 1 */}
                                    <GridColumn className='gallery-grid-column'>
                                        {galleryColumnOne.map(filename => 
                                            <a href={filename}>
                                                <Image centered size='large' className='gallery-picture' src={filename} />
                                            </a>
                                        )}
                                    </GridColumn>

                                    {/* Column 2*/}
                                    <GridColumn className='gallery-grid-column'>
                                        {galleryColumnTwo.map(filename => 
                                            <a href={filename}>
                                                <Image centered size='large' className='gallery-picture' src={filename} />
                                            </a>)}
                                    </GridColumn>

                                    {/* Column 3 */}
                                    <GridColumn className='gallery-grid-column'>
                                        {galleryColumnThree.map(filename => 
                                            <a href={filename}>
                                                <Image centered size='large' className='gallery-picture' src={filename} />
                                            </a>)}
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
