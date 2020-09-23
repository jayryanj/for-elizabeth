import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Menu,
    Container
  } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css';

class NavBar extends React.Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
      const { activeItem } = this.state

      return (
        <Menu stackable inverted pointing secondary compact size="large" className="menu">
            <Menu.Item
              name='home'
              className="menu-header"
            >
              <p>Elizabeth</p>
            </Menu.Item>
            
            
            <Container>
              <Menu.Menu className="menu-items-group" position="right">
                <Menu.Item
                  name='home' 
                  className="menu-item"
                  as={NavLink}
                  exact to="/"
                  active={activeItem === 'home'}
                  onClick={this.handleItemClick}
                >
                    Home
                </Menu.Item>

                <Menu.Item 
                  name='about'
                  className="menu-item"
                  as={NavLink}
                  exact to="/about"
                  active={activeItem === 'about'}
                  onClick={this.handleItemClick}
                >
                  About
                </Menu.Item>

                <Menu.Item 
                  name='gallery'
                  className="menu-item"
                  as={NavLink}
                  exact to="/gallery"
                  active={activeItem === 'gallery'}
                  onClick={this.handleItemClick}
                >
                  Gallery
                </Menu.Item>

              </Menu.Menu>
            </Container>
        </Menu> 
      )
    }
}

export default NavBar;

/*
        <Menu stackable text size="large" className="menu">
            <Menu.Item 
              className="menu-header"
              as={NavLink}
              to="/"
            >
              <p>Elizabeth</p>
            </Menu.Item>
            
            
            <Container>
              <Menu.Menu className="menu-items-group" position="right">
                <Menu.Item
                  name='home' 
                  className="menu-item"
                  as={NavLink}
                  to="/"
                  active={activeItem === 'home'}
                  onClick={this.handleItemClick}
                >
                    Home
                </Menu.Item>

                <Menu.Item 
                  name='about'
                  className="menu-item"
                  as={NavLink}
                  to="/about"
                  active={activeItem === 'about'}
                  onClick={this.handleItemClick}
                >
                  About
                </Menu.Item>

                <Menu.Item 
                  name='gallery'
                  className="menu-item"
                  as={NavLink}
                  to="/gallery"
                  active={activeItem === 'gallery'}
                  onClick={this.handleItemClick}
                >
                  Gallery
                </Menu.Item>

              </Menu.Menu>
            </Container>
        </Menu> 
*/