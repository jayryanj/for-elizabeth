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
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/_20190815-20190815_111721.jpg")} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/_IMG_60111(1).jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-27_161025.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-31_173711.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-27_161354.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-27_163003.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-27_172442.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-27_175455.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-27_181752.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-27_185329.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-27_195305.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-27_201757.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-27_202631.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-27_204000.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-27_205857.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-28_112103.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-28_112251.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-28_113007.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-28_113436.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-28_114824.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-28_120807.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-28_122010.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-31_154850.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-31_155849.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-31_162420.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-31_163602.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-31_165959.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-31_171753.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-31_173149.jpg')} />
                                    </GridColumn>

                                    {/* Column 2*/}
                                    <GridColumn className='gallery-grid-column'>
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/_20200828-2020-08-28_122549 (Restored).jpg')} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_172908.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_155137.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_160641.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-31_172923.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_162522.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_175747.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_181159.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_182535.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_184444.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_190235.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_200700.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_202021.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_203516.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_204302.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_210954.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-28_112548.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-28_113215.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-28_114025.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-28_115043.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-28_120106.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-28_120352.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-31_154218.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-31_155108.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-31_160224.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-31_163122.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-31_164157.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-31_165152.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-31_171238.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-31_171502.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-31_172005.jpg")} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-31_165629.jpg')} />
                                    
                                    </GridColumn>

                                    {/* Column 3 */}
                                    <GridColumn className='gallery-grid-column'>
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-31_173354.jpg')} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_153901.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_155758.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-31_171013.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_160247.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-31_172005.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_161951.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_163507.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_170946.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_171501.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_175000.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_180800.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_181401.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_184206.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_195007.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_201127.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_202414.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_203751.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-27_205119.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-28_111908.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-28_112758.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-28_113813.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-28_114445.jpg")} />
                                        <Image centered size='large' className='gallery-picture'  src={require("../resources/img/gallery/2020-08-28_115313.jpg")} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-28_115635.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-28_121554.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-31_154506.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-31_155637.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-31_160503.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-31_163401.jpg')} />
                                        <Image centered size='large' className='gallery-picture' src={require('../resources/img/gallery/2020-08-31_164931.jpg')} />
                                        
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