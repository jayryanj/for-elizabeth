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
                    {/* DELETE THIS AFTER REMOVING PLACEHOLDER TEXT */}
                    <Container>
                        <Segment size='large' raised color='red'>
                            This page contains placeholder text (in Latin) for visual testing. It will be replaced when the text is available.
                        </Segment>
                    </Container>

                    <Container>
                        <Divider horizontal>
                            <Header as='h2'className='about-segment-1-header-h1' textAlign='center'>About Her</Header>
                        </Divider>
                    </Container>

                    <Container>
                        <Header as='h3' className='about-segment-1-header-h3'>
                            Sunt nisi veniam cillum eu qui sunt labore velit fugiat voluptate quis adipisicing eiusmod amet.
                        </Header>
                        <Grid divided='vertically' className='about-segment-1-grid'>
                            <Grid.Row columns={2}>
                                <Grid.Column>
                                    <Header as='h4' className='about-segment-1-header-h4'>
                                        Et incididunt anim 
                                    </Header>
                                    <p>
                                        Ea pariatur dolor cupidatat laborum labore consequat elit dolore et. Consequat consequat eu irure Lorem nisi nostrud aute ipsum veniam voluptate culpa est aute aliqua. Adipisicing excepteur deserunt sint velit aliqua cupidatat dolore occaecat sint consectetur proident. Dolore exercitation nisi officia proident veniam elit et proident aute laborum cupidatat consequat. Laboris deserunt non esse velit minim cillum ad culpa et. Id culpa elit labore enim cillum et incididunt quis culpa deserunt aliquip incididunt magna commodo. Est elit aliqua dolore reprehenderit sit et consectetur aliquip do nisi Lorem. Aliqua exercitation Lorem mollit aliquip proident. Cillum ipsum ut ut eiusmod cillum aliquip velit qui non. Deserunt cillum amet amet consequat excepteur proident. Lorem duis amet in ad enim aliquip laborum est nisi aliqua. Voluptate sit cillum reprehenderit et ad commodo consequat nisi. Lorem mollit id magna nulla nostrud. Sit voluptate voluptate labore minim proident. Velit aute ea amet labore excepteur eiusmod quis culpa ex laborum id incididunt. Excepteur dolor mollit mollit tempor duis est Lorem deserunt non nulla mollit ullamco elit. Laboris ut ut tempor laboris sunt voluptate nisi duis pariatur qui amet id. Veniam elit sit nostrud cupidatat id. Ullamco sunt deserunt laborum fugiat occaecat aliqua dolore ad non.
                                    </p>
                                </Grid.Column>
                                <Grid.Column>
                                    <Header as='h4' className='about-segment-1-header-h4'>
                                        Non deserunt dolore pariatur
                                    </Header>
                                    <p>
                                        Est et veniam ut cillum magna sint ad sit sunt anim labore ad. Mollit incididunt incididunt anim velit ullamco elit veniam in dolore duis aute aute reprehenderit magna. Exercitation amet cillum reprehenderit consectetur magna incididunt reprehenderit adipisicing. Velit sint qui ipsum qui. Excepteur tempor exercitation consequat duis fugiat. Nulla culpa exercitation nulla culpa adipisicing laborum cillum culpa. Enim aute fugiat eiusmod fugiat eiusmod cillum dolor nulla aliqua Lorem est. Sunt sit deserunt do ad reprehenderit quis consectetur. Esse Lorem exercitation excepteur ex dolore nisi est qui ex Lorem non. Sit Lorem laborum nisi nisi dolor sint voluptate adipisicing voluptate. Adipisicing veniam officia magna sint ipsum minim commodo ex. Reprehenderit tempor velit qui minim irure incididunt in aliqua exercitation sunt ut sint. Voluptate do elit consequat magna enim ad deserunt consectetur laborum qui. Ipsum dolor consequat sint nulla eu pariatur sunt dolore nostrud consectetur eiusmod. Enim occaecat dolor do dolore sint tempor eiusmod sint irure id. In nulla veniam occaecat cupidatat excepteur aute ipsum duis est cupidatat sit consequat.
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
                                    src={require('../resources/img/IMG_60111(square).jpg')} 
                                    size='huge'
                                    centered
                                    className='about-segment-2-picture'
                                />
                            </Grid.Column>

                            <Grid.Column>
                                <Segment className='about-segment-2-segment'>
                                    <Container className='about-segment-2-container-1'>
                                        <p className='about-segment-2-header-1'>
                                            Laborum aute 
                                        </p>
                                        <p className='about-segment-2-p'>
                                        Tempor ea magna sunt ut velit ipsum minim magna. Qui incididunt do ullamco et ipsum labore mollit id ullamco anim sit irure dolor. Occaecat eu duis dolor fugiat ullamco duis aliqua quis sit nisi dolore ullamco elit. Reprehenderit nisi ut sunt in veniam in veniam veniam dolor pariatur. Velit ad tempor irure aliquip sint commodo sint labore commodo sint in. Cillum excepteur ullamco culpa mollit aliquip irure. Sint occaecat irure dolor occaecat commodo ipsum mollit consequat voluptate laborum exercitation est. Culpa mollit eiusmod ut eiusmod consequat proident qui eiusmod duis aliquip consequat sit reprehenderit. Magna laboris non esse magna eiusmod ipsum ex et esse veniam amet excepteur voluptate voluptate. Non commodo duis laborum sint anim ea irure laborum id elit in deserunt labore dolore.
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
                                        Time With Family
                                    </Header>
                                </Grid.Column>

                                <Grid.Column textAlign='left'>
                                    <p>
                                        Qui incididunt do ullamco et ipsum labore mollit id ullamco anim. Magna laboris non esse magna eiusmod ipsum ex et esse veniam amet excepteur voluptate voluptate. Non commodo duis laborum sint anim ea irure laborum id elit in deserunt labore dolore.
                                    </p>
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row columns={3} className='about-segment-3-grid-row-2'>

                                <Grid.Column className='about-segment-3-grid-column'>
                                    <Image 
                                        src={require('../resources/img/2020-08-27_155758 (square).jpg')} 
                                        fluid
                                        centered
                                    />
                                </Grid.Column>

                                <Grid.Column className='about-segment-3-grid-column'>
                                    <Image 
                                        src={require('../resources/img/2020-08-28_113813 (square).jpg')} 
                                        fluid
                                        centered
                                    />
                                </Grid.Column>

                                <Grid.Column className='about-segment-3-grid-column'>
                                    <Image 
                                        src={require('../resources/img/20190815-20190815_111721 (square).jpg')} 
                                        fluid
                                        centered
                                    />
                                </Grid.Column>

                            </Grid.Row>
                            <Grid.Row columns={3}>

                                <Grid.Column className='about-segment-3-grid-column'>
                                    <p>mollit consequat voluptate laborum exercitation est. Velit ad tempor irure aliquip sint commodo sint labore</p>
                                </Grid.Column>

                                <Grid.Column className='about-segment-3-grid-column'>
                                    <p>mollit consequat voluptate laborum exercitation est. Non commodo duis laborum sint anim ea irure laborum id elit in deserunt labore dolore.</p>
                                </Grid.Column>

                                <Grid.Column className='about-segment-3-grid-column'>
                                    <p>mollit consequat voluptate laborum exercitation est.</p>
                                </Grid.Column>

                            </Grid.Row>
                        </Grid>
                    </Container>
                    
                </Segment>


                <Segment className="about-segment-4" style={{ minHeight: 600, padding: '1em 0em' }}>
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