import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';

function App() {
  return (
      <Container fluid className={'pt-3 body'} >
      <Row>
      <Col className={'text-center d-block d-lg-none pt-5'} style={{fontWeight: 'bold', fontSize: '2em', color: 'aliceblue', textShadow: '0px 4px 4px #282828'}}>
          STAANDZ is coming...
        </Col>
        <Col className={'text-center d-none d-lg-block pb-4'} style={{fontWeight: 'bold', fontSize: '3em', color: 'aliceblue', textShadow: '0px 4px 4px #282828'}}>
          STAANDZ is coming...
        </Col>
      </Row>
      <Row className={'pt-5 pb-4'} style={{height: '35em', textAlign: 'center'}}>
        <Col sm={12} lg={4} className={'d-block d-lg-block pt-3'}>
          <Image style={{border: '3px solid aliceblue'}} src="images/1.PNG" rounded />
        </Col>

        <Col sm={12} lg={4} className={'d-none d-lg-block'}>
          <Image style={{border: '3px solid aliceblue'}} src="images/2.PNG" rounded />
        </Col>

        <Col sm={12} lg={4} className={'d-none d-lg-block'}>
          <Image style={{border: '3px solid aliceblue'}} src="images/3.PNG" rounded />
        </Col>
      </Row>
      <Row>
        <Col className={'text-center d-block d-lg-none pt-4 pb-5'} style={{fontWeight: 'bold', fontSize: '2em', color: 'aliceblue', textShadow: '0px 4px 4px #282828'}}>
          Sign up for updates!
        </Col>
        <Col className={'text-center d-none d-lg-block pt-5 pb-5'} style={{fontWeight: 'bold', fontSize: '3em', color: 'aliceblue', textShadow: '0px 4px 4px #282828'}}>
          Sign up for updates!
        </Col>
      </Row>
    </Container>
  );
}

export default App;
