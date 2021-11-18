import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import { FcAndroidOs } from 'react-icons/fc';
import { AiOutlineApple } from 'react-icons/ai';

function App() {

  
  return (
      <Container fluid className={'pt-3 body'} >
      <Row>
      <Col className={'text-center d-block d-lg-none'} style={{fontWeight: 'bold', fontSize: '2em', color: 'aliceblue', textShadow: '0px 4px 4px #282828'}}>
          STAANDZ is here!!
        </Col>
        <Col className={'text-center d-none d-lg-block pb-4'} style={{fontWeight: 'bold', fontSize: '3em', color: 'aliceblue', textShadow: '0px 4px 4px #282828'}}>
          STAANDZ is here!!
        </Col>
      </Row>
      <Row className={'pt-5 pb-4'} style={{height: '35em', textAlign: 'center'}}>

        <Col sm={12} lg={4} className={'d-block d-lg-none'}>

          <a href='https://play.google.com/store/apps/details?id=com.staandz' className={'mb-5 btn'} style={{height: '40%', width: '80%', backgroundColor: '#89CFF0', fontWeight: 'bold', border: 'none', fontSize: '2em', color:'aliceblue', textShadow: '0px 4px 4px #282828'}}>Get Staandz for Android <br /><FcAndroidOs size={100} /></a>

          <a href='https://www.staandz.com' className={'mt-5 btn'} style={{height: '40%', width: '80%', backgroundColor: 'grey', fontWeight: 'bold', border: 'none', fontSize: '2em', color:'aliceblue', textShadow: '0px 4px 4px #282828'}}>iOS coming soon! <br /><AiOutlineApple size={100} /></a>

        </Col>
     

        <Col sm={12} lg={4} className={'d-none d-lg-block'}>
          <Image style={{border: '3px solid aliceblue'}} src="images/1.png" rounded />
        </Col>
      
        <Col sm={12} lg={4} className={'d-none d-lg-block'}>

          <a href='https://play.google.com/store/apps/details?id=com.staandz' className={'mb-5 btn'} style={{height: '40%', width: '80%', backgroundColor: '#89CFF0', fontWeight: 'bold', border: 'none', fontSize: '2em', color:'aliceblue', textShadow: '0px 4px 4px #282828'}}>Get Staandz for Android <br /><FcAndroidOs size={100} /></a>

          <a href='https://www.staandz.com/' className={'mt-5 btn'} style={{height: '40%', width: '80%', backgroundColor: 'grey', fontWeight: 'bold', border: 'none', fontSize: '2em', color:'aliceblue', textShadow: '0px 4px 4px #282828'}}>iOS coming soon! <br /><AiOutlineApple size={100} /></a>


        </Col>

        <Col sm={12} lg={4} className={'d-none d-lg-block'}>
          <Image style={{border: '3px solid aliceblue'}} src="images/2.PNG" rounded />
        </Col>
      </Row>
      <Row>
        <Col className={'text-center d-block d-lg-none pt-4'} style={{fontWeight: 'bold', fontSize: '2em', color: 'aliceblue', textShadow: '0px 4px 4px #282828'}}>
          Sign up for updates!
        </Col>
        <Col className={'text-center d-none d-lg-block pt-5'} style={{fontWeight: 'bold', fontSize: '3em', color: 'aliceblue', textShadow: '0px 4px 4px #282828'}}>
          Sign up for updates!
        </Col>
      </Row>
    </Container>
  );
}

export default App;
