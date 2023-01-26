import './App.css';
import { useState } from 'react';


function App() {
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }
  const ABC = () => {
    return (<div className='Card' style={{padding: '16px 12px'}}>
      <div className='CardContent'>
        <div>
          <p>CATEGORY</p>
          <p>Rent</p>
        </div>
        <div>
          <p>PAYMENT STATUS</p>
          <p>Successful</p>
        </div>
        <div>
          <p>AMOUNT</p>
          <p>#1,250,000</p>
        </div>
      </div>
      {show &&
        <div>
          <div className='CardContent'>
            <div>
              <p>PAYMENT ID</p>
              <p>qwe2456898</p>
            </div>
            <div>
              <p>PAYMENT DATE</p>
              <p>09/10/2022</p>
            </div>
          </div>
          <div className='CardContent'>
            <div>
              <p>RECEIPTS</p>
              <p>qwe2456898</p>
            </div>
            <div>
              <p>ESCROW CODE</p>
              <p>09/10/2022</p>
            </div>
          </div>
        </div>
      }
      <div>
        <p className='ShowText' onClick={handleShow}>{show ? 'See less' : 'Show more'}</p>
      </div>
    </div>)
  }


  const XYZ = () => {
    return (
      <div className='Card'>
        <div style={{padding: '16px 12px 0px'}}>
          <div className='CardContent'>
            <div>
              <p>Commission on Penthouse</p>
              <p>#1,250,000</p>
            </div>
            <div>
              <p>Shortlet</p>
            </div>
          </div>
          <div>
            <div className='CardContent'>
              <div>
                <p>ESCROW CONFIRMATION</p>
                <p>Yes</p>
              </div>
              <div>
                <p>PAYMENT STATUS</p>
                <p>AWAITING CODE</p>
              </div>
            </div>
            <div className='CardContent'>
              <div>
                <p>PAYMENT DATE</p>
                <p>-</p>
              </div>
            </div>
          </div>

        </div>
        <div>
          <div className='line'></div>
          <p className='EnterText' style={{padding: 10}}>Enter Escrow Code</p>
        </div>
      </div>
    )

  }
  return (
    <div className="App">
      <ABC />
      <div style={{ marginTop: 40 }}>
        <XYZ />
      </div>
    </div>
  );
}

export default App;
