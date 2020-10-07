import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Segment, Divider, Grid, Image } from 'semantic-ui-react';
import Portrait from '../components/Portrait';
import FamilyNotes from '../components/FamilyNotes';

class About extends React.Component {
    render() {
        return (
            <div>
                <Portrait />

                <Segment className="about-segment-1" style={{ padding: '1em 0em' }}>
                    <Container>
                        <Divider horizontal>
                            <Header as='h2'className='about-segment-1-header-h1' textAlign='center'>About Her</Header>
                        </Divider>
                    </Container>

                    <Container>
                        <Header as='h3' className='about-segment-1-header-h3'>
                            Here, you can learn about Elizabeth through the perspective of her family and loved ones.
                        </Header>
                        <Grid divided='vertically' className='about-segment-1-grid'>
                            <Grid.Row columns={2}>
                                <Grid.Column>
                                    <Header as='h4' className='about-segment-1-header-h4'>
                                        Early Life
                                    </Header>
                                    <p className='about-early-life'>
                                        Elizabeth "Les/Lisa" Jamorabon was born in Marabos, Vintar, Ilocos Norte, Philippines on April 27, 1965 to her parents, Santiago and Estralita. She grew up with one older sister, Josie, and her two younger sisters, Vangie and Genie. In total, she had 3 sisters that she adored. In the Philippines, she attended Malampa Elementary School from grades 1-6. Although she grew up to be quiet woman, Les was a rambunctious child that would mess with her sisters. On October 1st, 1978, her family moved from the Philippines to Honolulu, Hawaii in the neighborhood of Kalihi. At the time, she transferred to Kalakaua Intermediate School and moved on to attend Farrington High School. Les later graduated from Farrington in 1984. 
                                    </p>
                                </Grid.Column>
                                <Grid.Column>
                                    <Header as='h4' className='about-segment-1-header-h4'>
                                        Work
                                    </Header>
                                    <p className='about-work'>
                                        Elizabeth was best known for her hard work in supporting her family. In her senior year of high school (1983), Les began working her first job as a Packer for Dole Cannery. She continued working at Dole Cannery to financially help her parents up until 1992. Afterwards, she worked at Redondo's from 1993 to 1995. In 1995, She quickly picked up a new position as a Cook at the McDonald's restaurant at Moanalua Shopping Center. There, she made many friends and enjoyed her time working among several family members. She eventually got promoted to a trainer. Although it was sometimes exhausting, she enjoyed her job and didn't see herself working anywhere else. She worked very hard and set a precedence, earning a few awards at her job. Although she took an intermediate break to relax, stay home, and take care of her kids, she continued working at McDonald's up until her passing.
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>


                <Segment className="about-segment-2" style={{ padding: '1em 0em' }}>
                    <Grid columns={2} stackable className='about-segment-2-grid'>
                        <Grid.Row>
                            <Grid.Column>
                                <Image 
                                    src={require('../resources/img/2020-08-31_173711 (square).jpg')} 
                                    size='large'
                                    centered
                                    className='about-segment-2-picture'
                                />
                                <Image 
                                    src={require('../resources/img/20200829-2020-08-29_194724 (square).jpg')} 
                                    size='large'
                                    centered
                                    className='about-segment-2-picture'
                                />
                            </Grid.Column>

                            <Grid.Column>
                                <Segment className='about-segment-2-segment'>
                                    <Container className='about-segment-2-container-1'>
                                        <p className='about-segment-2-header-1'>
                                            Love and Kids 
                                        </p>
                                        <p className='about-segment-2-p'>
                                            Les met Romy Jamorabon through his cousin, Lisa, whom she worked with at McDonald's. At the time, Romy lived in the Philippines, so they often sent letters to each other. The two eventually formed a romance together. In 1994, Les travelled to the Philippines where she finally met with Romy in-person. On June 20, Les and Romy got married in Laoag, Ilocos Norte, Philippines. Her family traveled to attend and celebrate the wedding. In December of that same year, Romy finally moved from the Philippines to Hawaii so they can be together. On July 20, 1996, Les and Romy had their first son, Kevin. Then on January 2, 1999, they had their second son, Jay. She loved her two boys more than anything in the world. They were everything to her, so she worked hard to ensure that Kevin and Jay grew up happily. She raised Kevin and Jay into a smart, playful little pair of boys. Les and Romy watched as their two boys grew up to be handsome young men. She loved her sons very much, and she was so proud them.
                                        </p>
                                    </Container>
                                </Segment>
                            </Grid.Column>

                        </Grid.Row>
                    </Grid>
                </Segment>


                <Segment className="about-segment-3" style={{ padding: '1em 0em' }}>
                    <Container className='about-segment-3-main-container'>
                        <Grid container className='about-segment-3-grid'>
                            <Grid.Row columns={2}>

                                <Grid.Column>
                                    <Header as='h4' textAlign='left' className='about-segment-3-header'>
                                        Her Family
                                    </Header>
                                </Grid.Column>

                                <Grid.Column textAlign='left'>
                                    <p className='about-segment-3-header-description'>
                                        Les loved her family so much. les was always there to be with her family. She would rarely miss an opportunity to spend her time around her loved ones. 
                                    </p>
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row columns={3} className='about-segment-3-grid-row-2'>

                                <Grid.Column className='about-segment-3-grid-column'>
                                    <Image 
                                        src={require('../resources/img/DSC_0373 (wide).JPG')}
                                        fluid
                                        centered
                                    />
                                </Grid.Column>

                                <Grid.Column className='about-segment-3-grid-column'>
                                    <Image 
                                        src={require('../resources/img/DSC_0499 (wide).JPG')} 
                                        fluid
                                        centered
                                    />
                                </Grid.Column>

                                <Grid.Column className='about-segment-3-grid-column'>
                                    <Image 
                                        src={require('../resources/img/Family_Portrait_Final (wide).png')} 
                                        fluid
                                        centered
                                    />
                                </Grid.Column>

                            </Grid.Row>
                            <Grid.Row columns={3}>

                                <Grid.Column className='about-segment-3-grid-column'>
                                    <p>She was the happiest at Christmas parties, Thanksgiving dinners, and birthday gatherings where she can spend time with everyone.</p>
                                </Grid.Column>

                                <Grid.Column className='about-segment-3-grid-column'>
                                    <p>She loved catching up, watching movies, eating dinner, and playing Mahjong with everyone. </p>
                                </Grid.Column>

                                <Grid.Column className='about-segment-3-grid-column'>
                                    <p>Family gatherings will never be the same without her. Les' presence will forever be missed.</p>
                                </Grid.Column>

                            </Grid.Row>
                        </Grid>
                    </Container>
                    
                </Segment>


                <Segment className="about-segment-4" style={{ minHeight: 600, padding: '1em 0em' }}>

                    {/* DELETE THIS AFTER REMOVING PLACEHOLDER TEXT */}
                    <Container>
                        <Segment size='large' raised color='red'>
                            This section contains placeholder text (in Latin) for visual testing. It will be replaced when the text is available.
                        </Segment>
                    </Container>

                    <Container>
                        <p className='about-segment-4-header' textAlign='center'>
                            Notes from Loved-Ones
                        </p>
                        <p className='about-segment-4-description'>
                            These are some notes written about Elizabeth from her loved-ones. 
                        </p>
                    </Container>
                    <FamilyNotes />

                </Segment>

            </div>
        );
    }
}

export default About;