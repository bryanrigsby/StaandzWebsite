import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
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
        <Col className={'text-center pt-2 pb-2'} style={{fontWeight: 'bold', fontSize: '2em', color: 'aliceblue', textShadow: '0px 2px 4px #282828', borderBottom: '2px solid darkgreen'}}>
          STAANDZ
        </Col>
      </Row>

      <Row className={'d-none d-md-flex text-center mt-5'}>
        <Col className={'text-center'} style={{fontWeight: 'bold', fontSize: '1.75em', color: 'aliceblue', textShadow: '0px 2px 4px #282828'}}>
          Love mobile businesses like <span style={{color: 'darkgreen', textShadow: 'none', fontWeight: 'bolder'}}>FRUIT STANDS</span> and <span style={{color: 'darkgreen', textShadow: 'none', fontWeight: 'bolder'}}>FOOD TRUCKS</span> but have trouble finding them?</Col>
      </Row>

      <Row className={'mt-3 d-block d-md-none'}>
        <Col className={'text-center px-5'} style={{fontWeight: 'bold', fontSize: '1.25em', color: 'aliceblue', textShadow: '0px 2px 4px #282828'}}>
          Love mobile businesses like 
        </Col>
      </Row>

      <Row className={'mt-3 d-block d-md-none'}>
        <Col className={'text-center'} style={{fontSize: '1.5em', color: 'darkgreen', fontWeight: 'bold'}}>
        <span style={{color: 'darkgreen', textShadow: 'none', fontWeight: 'bolder'}}>FRUIT STANDS</span>
        </Col>
      </Row>

      <Row className={'mt-3 d-block d-md-none'}>
        <Col className={'text-center px-5'} style={{fontWeight: 'bold', fontSize: '1.25em', color: 'aliceblue', textShadow: '0px 2px 4px #282828'}}>
          and
        </Col>
      </Row>

      <Row className={'mt-3 d-block d-md-none'}>
        <Col className={'text-center'} style={{fontSize: '1.5em', color: 'darkgreen', fontWeight: 'bold'}}>
        <span style={{color: 'darkgreen', textShadow: 'none', fontWeight: 'bolder'}}>FOOD TRUCKS</span>
        </Col>
      </Row>
      
      <Row className={'mt-3 d-block d-md-none'}>
        <Col className={'text-center'} style={{fontWeight: 'bold', fontSize: '1.25em', color: 'aliceblue', textShadow: '0px 2px 4px #282828'}}>
        but have trouble finding them?
        </Col>
      </Row>


      <Row className={'d-none d-md-flex text-center mt-5'}>
        <Col sm={4}>
          <Image  style={{border: '2px solid white'}} width={'300px'} src="images/homescreen.png"/>
        </Col>
        <Col sm={4}>
          <Image  style={{border: '2px solid white'}} width={'300px'} src="images/allstands.png"/>
        </Col>
        <Col sm={4}>
          <Image  style={{border: '2px solid white'}} width={'300px'} src="images/map.png"/>
        </Col>
      </Row>

      <Row>
        <Col className='text-center mb-4 mt-4 d-block d-md-none'>
        <Image  style={{border: '2px solid white'}} width={'350px'} src="images/homescreen.png"/>
        </Col>
      </Row>

      <Row>
        <Col className='text-center mb-4 mt-4 d-block d-md-none'>
        <Image  style={{border: '2px solid white'}} width={'350px'} src="images/allstands.png"/>
        </Col>
      </Row>

      <Row className={'pb-md-4'} style={{borderBottom: '2px solid darkgreen'}}>
        <Col className='text-center mb-4 d-block d-md-none'>
        <Image  style={{border: '2px solid white'}} width={'350px'} src="images/map.png"/>
        </Col>
      </Row>

      <Row className={'m-4'} >
        <Col sm={12} md={5} style={{backgroundColor: '#89CFF0', textAlign: 'center', borderRadius: 15, borderColor: 'white', borderWidth: '2px', borderStyle: 'solid'}}>
          <a href='https://play.google.com/store/apps/details?id=com.staandz' target={'_blank'} rel={"noreferrer"} className={'mb-4 btn'} style={{height: '30%', width: '80%', backgroundColor: '#89CFF0', fontWeight: 'bold', border: 'none', fontSize: '1.5em', color:'aliceblue', textShadow: '0px 2px 4px #282828'}}>Get Staandz<br /><FcAndroidOs size={100} /></a>
        </Col>
        <Col sm={0} md={2}></Col>
        <Col sm={12} md={5} className={'mt-4 mt-md-0'} style={{textAlign: 'center', backgroundColor: 'darkgreen', borderRadius: 15}}>
          <a href='https://apps.apple.com/us/app/staandz/id1595469039' target={'_blank'} rel={"noreferrer"} className={'mb-1 btn'} style={{height: '30%', width: '80%', backgroundColor: 'darkgreen', fontWeight: 'bold', border: 'none', fontSize: '1.5em', paddingBottom: '15px', color:'aliceblue', textShadow: '0px 2px 4px #282828'}}>Get Staandz<br /><AiOutlineApple size={100} /></a>
        </Col>
      </Row>
     

      <Row>
        <Col className={'text-center pt-1 pb-2'} style={{fontWeight: 'bold', fontSize: '2em', color: 'aliceblue', textShadow: '0px 2px 4px #282828', borderTop: '2px solid darkgreen', borderBottom: '2px solid darkgreen'}}>
          Own a stand?
        </Col>
      </Row>

      <Row className={'d-none d-md-flex text-center mt-5'}>
        <Col className={'text-center'} style={{fontWeight: 'bold', fontSize: '1.5em', color: 'aliceblue', textShadow: '0px 2px 4px #282828'}}>
        Put your business on the map <span style={{color: 'darkgreen', textShadow: 'none', fontWeight: 'bolder'}}>LITERALLY!</span> Staandz customers will see your location in real time and can view your upcoming events and products with just a tap!</Col>
      </Row>

      <Row className={'mt-3 d-block d-md-none'}>
        <Col className={'text-center px-5'} style={{fontWeight: 'bold', fontSize: '1.25em', color: 'aliceblue', textShadow: '0px 2px 4px #282828'}}>
          Put your business on the map
        </Col>
      </Row>

      <Row className={'mt-3 d-block d-md-none'}>
        <Col className={'text-center'} style={{fontSize: '1.5em', color: 'darkgreen', fontWeight: 'bold'}}>
        <span style={{color: 'darkgreen', textShadow: 'none', fontWeight: 'bolder'}}>LITERALLY!</span>
        </Col>
      </Row>

      <Row className={'mt-3 mb-4 d-block d-md-none'}>
        <Col className={'text-center px-5'} style={{fontWeight: 'bold', fontSize: '1.25em', color: 'aliceblue', textShadow: '0px 2px 4px #282828'}}>
          Staandz customers will see your location in real time and can view your upcoming events and products with just a tap!
        </Col>
      </Row>

      <Row className={'d-none d-md-flex text-center mt-5'}>
        <Col sm={4}>
          <Image  style={{border: '2px solid white'}} width={'300px'} src="images/owner_login.PNG"/>
        </Col>
        <Col sm={4}>
          <Image  style={{border: '2px solid white'}} width={'300px'} src="images/stand.PNG"/>
        </Col>
        <Col sm={4}>
          <Image  style={{border: '2px solid white'}} width={'300px'} src="images/status.PNG"/>
        </Col>
      </Row>

      <Row>
        <Col className='text-center mb-4 d-block d-md-none'>
        <Image  style={{border: '2px solid white'}} width={'350px'} src="images/owner_login.PNG"/>
        </Col>
      </Row>

      <Row>
        <Col className='text-center mb-4 d-block d-md-none'>
        <Image  style={{border: '2px solid white'}} width={'350px'} src="images/stand.PNG"/>
        </Col>
      </Row>

      <Row>
        <Col className='text-center mb-4 d-block d-md-none'>
        <Image  style={{border: '2px solid white'}} width={'350px'} src="images/owner.png"/>
        </Col>
      </Row>

      <Row className={'m-4'} >
        <Col sm={12} md={5} style={{backgroundColor: '#89CFF0', textAlign: 'center', borderRadius: 15, borderColor: 'white', borderWidth: '2px', borderStyle: 'solid'}}>
          <a href='https://play.google.com/store/apps/details?id=com.staandzowner' target={'_blank'} rel={"noreferrer"} className={'mb-4 btn'} style={{height: '30%', width: '80%', backgroundColor: '#89CFF0', fontWeight: 'bold', border: 'none', fontSize: '1.5em', color:'aliceblue', textShadow: '0px 2px 4px #282828'}}>Get Staandz Owner<br /><FcAndroidOs size={100} /></a>
        </Col>
        <Col sm={0} md={2}></Col>
        <Col sm={12} md={5} className={'mt-4 mt-md-0'} style={{textAlign: 'center', backgroundColor: 'darkgreen', borderRadius: 15}}>
          <a href='https://apps.apple.com/us/app/staandz-owner/id1613829801' target={'_blank'} rel={"noreferrer"} className={'mb-1 btn'} style={{height: '30%', width: '80%', backgroundColor: 'darkgreen', fontWeight: 'bold', border: 'none', fontSize: '1.5em', paddingBottom: '15px', color:'aliceblue', textShadow: '0px 2px 4px #282828'}}>Get Staandz Owner<br /><AiOutlineApple size={100} /></a>
        </Col>
      </Row>

      <Row className={'mt-5 d-none d-md-flex'}>
        <Col className={'text-center px-5'}>
          <Image width={'150px'} src={'images/veteranowned.png'} />
        </Col>
        <Col className={'text-center px-5'}>
          <a href={"https://www.krmg.com/on-air/"} target={"_blank"} rel="noreferrer">
          <Image width={'240px'} src={'images/krmg.png'} />
          </a>
        </Col>
        <Col className={'text-center px-5'} style={{fontWeight: 'bold', fontSize: '1.25em'}}>
          <a style={{textDecoration: 'none', color: 'aliceblue'}} href={"https://www.hangar2apps.com/"} target={"_blank"} rel="noreferrer">
          &copy;2022 Hangar2Apps LLC
          </a>
        </Col>
        <Col className={'text-center px-5'}>
          <a href={"https://spotlight918.com/"} target={"_blank"} rel="noreferrer">
          <Image width={'220px'} src={'images/spotlight918.png'} />
          </a>
        </Col>
        <Col className={'text-center px-5'}>
          <a href={"https://www.okiefoodtrucks.com/"} target={"_blank"} rel="noreferrer">
          <Image width={'180px'} src={'images/okiefoodtrucks.png'} />
          </a>
        </Col>
      </Row>

      <Row className={'mt-5 d-block d-md-none'}>
        <Col className={'text-center px-5 mb-3'}>
          <Image width={'150px'} src={'images/veteranowned.png'} />
        </Col>
        <Col className={'text-center px-5 mb-3'}>
          <a href={"https://www.krmg.com/on-air/"} target={"_blank"} rel="noreferrer">
          <Image width={'240px'} src={'images/krmg.png'} />
          </a>
        </Col>
        <Col className={'text-center px-5 mb-3'}>
          <a href={"https://spotlight918.com/"} target={"_blank"} rel="noreferrer">
          <Image width={'220px'} src={'images/spotlight918.png'} />
          </a>
        </Col>
        <Col className={'text-center px-5 mb-3'}>
          <a href={"https://www.okiefoodtrucks.com/"} target={"_blank"} rel="noreferrer">
          <Image width={'180px'} src={'images/okiefoodtrucks.png'} />
          </a>
        </Col>
        <Col className={'text-center px-5'} style={{fontWeight: 'bold', fontSize: '1.25em'}}>
          <a style={{textDecoration: 'none', color: 'aliceblue'}} href={"https://www.hangar2apps.com/"} target={"_blank"} rel="noreferrer">
          &copy;2022 Hangar2Apps LLC
          </a>
        </Col>
      </Row>
      
    </Container>
  );
}

export default App;
