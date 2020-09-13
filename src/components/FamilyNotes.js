import React from 'react';
import {
    Card,
    Container
  } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css';

const notes = [
    {
        name: 'Jay Jamorabon',
        rel: 'Son',
        message: 'Pariatur ut quis reprehenderit dolore adipisicing excepteur reprehenderit pariatur labore sint in culpa. Lorem esse ea voluptate proident. Aliquip aute occaecat est amet elit quis ea ullamco ea sunt. Nostrud enim amet voluptate nostrud elit tempor mollit laboris consectetur labore excepteur anim ipsum nulla. Cupidatat eu tempor nisi enim nisi.'
    },
    {
        name: 'Kevin Jamorabon',
        rel: 'Son',
        message: 'Commodo reprehenderit culpa amet eiusmod eu enim deserunt cupidatat occaecat. Id reprehenderit dolore officia adipisicing. Incididunt non qui excepteur proident sint in ad excepteur. Sit fugiat et duis consectetur. Aliqua ipsum nostrud aliquip eiusmod veniam veniam sint exercitation consequat consectetur occaecat. Deserunt proident magna laboris pariatur aliquip qui mollit incididunt ullamco ullamco aliquip. Exercitation est ut nulla voluptate sit consequat magna dolor occaecat cillum sint culpa aliqua ex.'
    },
    {
        name: 'Romeo Jamorabon',
        rel: 'Husband',
        message: 'Adipisicing cillum minim nulla nulla deserunt proident esse est labore qui. In incididunt adipisicing exercitation duis ut culpa. Elit irure non qui magna magna exercitation. Velit eu qui exercitation consectetur mollit officia ipsum nostrud duis officia occaecat tempor sint esse.'
    }
];

class FamilyNotes extends React.Component {
    constructor(props) {
        super(props);

        this.state = { notes }

    }
    render() {
        return(
                <Container className='about-segment-3-notes-container'>
                <Card.Group centered>
                    {this.state.notes.map((note, index) => {
                        return(
                            <Card className='family-note'>
                                <Card.Content>
                                    <Card.Header>
                                        {note.name}
                                    </Card.Header>
                                    <Card.Meta>
                                        {note.rel}
                                    </Card.Meta>
                                    <Card.Description>
                                        {note.message}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        );
                    })}
                    
                </Card.Group>
            </Container>
        );
    }
}

export default FamilyNotes;

/* 
                    <Card className='family-note'>
                        <Card.Content>
                            "Pariatur ut quis reprehenderit dolore adipisicing excepteur reprehenderit pariatur labore sint in culpa. Lorem esse ea voluptate proident. Aliquip aute occaecat est amet elit quis ea ullamco ea sunt. Nostrud enim amet voluptate nostrud elit tempor mollit laboris consectetur labore excepteur anim ipsum nulla. Cupidatat eu tempor nisi enim nisi."
                        </Card.Content>
                        <Card.Content extra>
                            Jay Jamorabon (Son)
                        </Card.Content>
                    </Card>

                    <Card className='family-note'>
                        <Card.Content>
                            <Card.Header>
                                Jay Ryan Jamorabon
                            </Card.Header>
                            <Card.Meta>
                                Son
                            </Card.Meta>
                            <Card.Description>
                            "Pariatur ut quis reprehenderit dolore adipisicing excepteur reprehenderit pariatur labore sint in culpa. Lorem esse ea voluptate proident. Aliquip aute occaecat est amet elit quis ea ullamco ea sunt. Nostrud enim amet voluptate nostrud elit tempor mollit laboris consectetur labore excepteur anim ipsum nulla. Cupidatat eu tempor nisi enim nisi."
                            </Card.Description>
                        </Card.Content>
                    </Card>

                    <Card className='family-note'>
                        <Card.Content>
                            "Deserunt mollit enim pariatur labore voluptate sunt deserunt veniam non duis irure aliqua officia adipisicing. Eu est aliquip Lorem ut ex. Cillum esse excepteur laborum voluptate. Occaecat ad deserunt occaecat esse do velit laboris minim proident aliquip. Mollit ullamco anim ea mollit laborum."
                        </Card.Content>
                        <Card.Content extra>
                            Kevin Jamorabon (Son)
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content>
                            "Dolor exercitation reprehenderit id consectetur incididunt voluptate deserunt nostrud. Ea dolor occaecat amet excepteur id ullamco proident elit non deserunt. Cupidatat sunt labore cillum consectetur excepteur tempor incididunt. Ullamco amet consequat esse magna fugiat laboris esse do laboris. Aute amet sit officia sit consequat officia minim nisi ullamco sit esse enim officia velit."
                        </Card.Content>
                        <Card.Content extra>
                            Romeo Jamorabon (Husband)
                        </Card.Content>
                    </Card>
*/