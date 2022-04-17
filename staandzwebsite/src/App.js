import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FcAndroidOs } from 'react-icons/fc';
import { AiOutlineApple } from 'react-icons/ai';

function App() {

  const [device, setDevice] = useState("")

  function getMobileOperatingSystem() {


    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    console.log(window.width)

    // if(window.innerWidth > 700){
    //   window.location = "https://www.hangar2apps.com/"
    // }

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
  }

  useEffect(() => {
    let device = getMobileOperatingSystem()
    setDevice(device)
  }, [])
  

  console.log('device', device)
  
  return (
      <Container className={'pb-5'} fluid style={{backgroundColor: '#89CFF0'}}>
      <Row>
        <Col className={'text-center mt-3'} style={{fontWeight: 'bold', fontSize: '2em', color: 'aliceblue', textShadow: '0px 4px 4px #282828'}}>
          STAANDZ is here!!
        </Col>
      </Row>

      <Row className={'mt-5'}>
        <Col className={'text-center'} style={{fontWeight: 'bold', fontSize: '2em', color: 'aliceblue', textShadow: '0px 4px 4px #282828'}}>
          Do you love fruit stands?
        </Col>
      </Row>

      <Row className={'m-4'} >
        <Col sm={12} md={5} style={{backgroundColor: '#89CFF0', textAlign: 'center', borderRadius: 15, borderColor: 'white', borderWidth: '2px', borderStyle: 'solid'}}>
          <a href='https://play.google.com/store/apps/details?id=com.staandz' target={'_blank'} rel={"noreferrer"} className={'mb-4 btn'} style={{height: '30%', width: '80%', backgroundColor: '#89CFF0', fontWeight: 'bold', border: 'none', fontSize: '1.5em', color:'aliceblue', textShadow: '0px 4px 4px #282828'}}>Get Staandz<br /><FcAndroidOs size={100} /></a>
        </Col>
        <Col sm={0} md={2}></Col>
        <Col sm={12} md={5} className={'mt-4 mt-md-0'} style={{textAlign: 'center', backgroundColor: 'darkgreen', borderRadius: 15}}>
          <a href='https://apps.apple.com/us/app/staandz/id1595469039' target={'_blank'} rel={"noreferrer"} className={'mb-1 btn'} style={{height: '30%', width: '80%', backgroundColor: 'darkgreen', fontWeight: 'bold', border: 'none', fontSize: '1.5em', paddingBottom: '15px', color:'aliceblue', textShadow: '0px 4px 4px #282828'}}>Get Staandz<br /><AiOutlineApple size={100} /></a>
        </Col>
      </Row>
     
      <Row>
        <Col className={'text-center'} style={{fontWeight: 'bold', fontSize: '2em', color: 'aliceblue', textShadow: '0px 4px 4px #282828'}}>
          Do you love food trucks?
        </Col>
      </Row>

      <Row className={'m-4'} >
        <Col sm={12} md={5} style={{backgroundColor: '#89CFF0', textAlign: 'center', borderRadius: 15, borderColor: 'white', borderWidth: '2px', borderStyle: 'solid'}}>
          <a href='https://play.google.com/store/apps/details?id=com.staandz' target={'_blank'} rel={"noreferrer"} className={'mb-4 btn'} style={{height: '30%', width: '80%', backgroundColor: '#89CFF0', fontWeight: 'bold', border: 'none', fontSize: '1.5em', color:'aliceblue', textShadow: '0px 4px 4px #282828'}}>Get Staandz<br /><FcAndroidOs size={100} /></a>
        </Col>
        <Col sm={0} md={2}></Col>
        <Col sm={12} md={5} className={'mt-4 mt-md-0'} style={{textAlign: 'center', backgroundColor: 'darkgreen', borderRadius: 15}}>
          <a href='https://apps.apple.com/us/app/staandz/id1595469039' target={'_blank'} rel={"noreferrer"} className={'mb-1 btn'} style={{height: '30%', width: '80%', backgroundColor: 'darkgreen', fontWeight: 'bold', border: 'none', fontSize: '1.5em', paddingBottom: '15px', color:'aliceblue', textShadow: '0px 4px 4px #282828'}}>Get Staandz<br /><AiOutlineApple size={100} /></a>
        </Col>
      </Row>

      <Row>
        <Col className={'text-center'} style={{fontWeight: 'bold', fontSize: '2em', color: 'aliceblue', textShadow: '0px 4px 4px #282828'}}>
          Own a stand?
        </Col>
      </Row>

      <Row className={'m-4'} >
        <Col sm={12} md={5} style={{backgroundColor: '#89CFF0', textAlign: 'center', borderRadius: 15, borderColor: 'white', borderWidth: '2px', borderStyle: 'solid'}}>
          <a href='https://play.google.com/store/apps/details?id=com.staandzowner' target={'_blank'} rel={"noreferrer"} className={'mb-4 btn'} style={{height: '30%', width: '80%', backgroundColor: '#89CFF0', fontWeight: 'bold', border: 'none', fontSize: '1.5em', color:'aliceblue', textShadow: '0px 4px 4px #282828'}}>Get Staandz Owner<br /><FcAndroidOs size={100} /></a>
        </Col>
        <Col sm={0} md={2}></Col>
        <Col sm={12} md={5} className={'mt-4 mt-md-0'} style={{textAlign: 'center', backgroundColor: 'darkgreen', borderRadius: 15}}>
          <a href='https://apps.apple.com/us/app/staandz-owner/id1613829801' target={'_blank'} rel={"noreferrer"} className={'mb-1 btn'} style={{height: '30%', width: '80%', backgroundColor: 'darkgreen', fontWeight: 'bold', border: 'none', fontSize: '1.5em', paddingBottom: '15px', color:'aliceblue', textShadow: '0px 4px 4px #282828'}}>Get Staandz Owner<br /><AiOutlineApple size={100} /></a>
        </Col>
      </Row>
      
    </Container>
  );
}

export default App;
