import React from 'react';
import {
    Card,
    Container
  } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css';

class FamilyNotes extends React.Component {
    render() {
        return(
                <Container className='about-segment-3-notes-container'>
                <Card.Group centered>
                    <Card>
                        <Card.Content>
                            "Pariatur ut quis reprehenderit dolore adipisicing excepteur reprehenderit pariatur labore sint in culpa. Lorem esse ea voluptate proident. Aliquip aute occaecat est amet elit quis ea ullamco ea sunt. Nostrud enim amet voluptate nostrud elit tempor mollit laboris consectetur labore excepteur anim ipsum nulla. Cupidatat eu tempor nisi enim nisi."
                        </Card.Content>
                        <Card.Content extra>
                            Jay Jamorabon (Son)
                        </Card.Content>
                    </Card>

                    <Card>
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
                </Card.Group>
            </Container>
        );
    }
}

export default FamilyNotes;