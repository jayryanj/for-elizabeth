import React from 'react';
import {
    Segment,
    Image,
    Header
  } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css';

class Portrait extends React.Component {
    render() {
        return(
            <Segment className="portrait">
                <Header 
                    as='h2'
                    content='In loving memory of ...'
                    className='portrait-header'
                    color='grey'
                />
                <Image src={require('../resources/img/portrait.png')}
                    circular
                    size='medium'
                    centered
                    className="portrait-picture"
                />
                <Header 
                    as='h2'
                    content='Elizabeth D. Jamorabon'
                    className='portrait-name'
                />
                <Header 
                    as='h4'
                    content='1965 - 2020'
                    className='portrait-date'
                    color='grey'
                />

            </Segment>
        );
    }
}

export default Portrait;