import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Image, Menu, Grid, List, Input, Button, Icon } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu secondary className="topmenu">
          <Container>
            <div className="logo">
            <Menu.Item><Image src="https://storage.googleapis.com/tate-digital/ui/3.17.0.1-compressed/static/images/tate-logo.png" size='small' centered />
            </Menu.Item>
            </div>
            <Menu.Item fitted position="right">Search </Menu.Item>
            <Menu.Item fitted>Shop</Menu.Item>
          </Container>
        </Menu>

    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Grid centered>
          <Grid.Row>
            <Menu borderless className="secondmenu">
              <Menu.Item>ART & ARTIST</Menu.Item>
              <Menu.Item>EXHIBITIONS & EVENTS</Menu.Item>
              <Menu.Item>PLAN YOUR VISIT</Menu.Item>
            </Menu>
          </Grid.Row>
        </Grid>
    )
  }
}

class Middle extends React.Component {
  render() {
    const gridStyle = { height: "500px" };
    return (
        <div className="tate-back">
          <Grid container verticalAlign="center" style={gridStyle}>
              <Grid.Column>
                <Header size='huge' inverted>
                  AUBREY BEARDSLEY
                </Header>
                <Button color='orange'>BOOK NOW<Icon name='arrow right' size='large' /></Button>
              </Grid.Column>
          </Grid>
        </div>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className="bottommenu">
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column>
                <List>
                  <h2>About Us</h2>
                  <List.Item>Our Collection</List.Item>
                  <List.Item>Terms and Conditions</List.Item>
                  <List.Item>Governance</List.Item>
                  <List.Item>Picture Library</List.Item>
                  <List.Item>ARTIST ROOM</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column>
                <List>
                  <h2>SUPPORT</h2>
                  <List.Item>Tate Collective</List.Item>
                  <List.Item>Members</List.Item>
                  <List.Item>Patrons</List.Item>
                  <List.Item>Donate</List.Item>
                  <List.Item>Corporate</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column>
                <h3>JOIN IN</h3>
                <h4>Sign Up For Our Newsletter</h4>
                <List.Item><Icon name='facebook f' size='large' /><Icon name='twitter' size='large' /><Icon name='pinterest' size='large' /><Icon name='instagram' size='large' /></List.Item>
                <br/>
                <Input
                    action={ { color: 'blue', content: 'Submit'} }
                    placeholder="Email Address"
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleMenu/>
          <Middle/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(
    <IslandSnow/>,
    document.getElementById('root')
);