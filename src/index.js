import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import picture from './logo512.png';
const Fish = () => {
  return (
    <div style = {Shape}>
     <div style = {Shape.Side}>Big Bank, Inc</div>
     <div style = {Shape.CardNumber}>1234 5678 8765 4321</div>
     < div style = {Shape.Holder} > 1234 </div>
      <div div style = {Shape.Valid} >
        <span>
          <span style = {Shape.Valid}>VALID</span>
          <span style = {Shape.Valid}>THRU</span>
        </span>
        <span style={Shape.Date}>
          08/19
        </span>
      </div>
      <div div style = {Shape.Holder} >
      CARDHOLDER NAME
      </div>
      <div>
     </div>
    </div>
  )
}
const Shape = {
  borderRadius: "0.5em",
  height: "15em",
  width: " 38em",
  backgroundColor: "blue",
  color: "white",
  margin: "5em auto",
  padding: '1em',
 Side : {
   textAlign: "right",
   fontSize: "2.3em",
   marginRight: "0.9em"
 },
 CardNumber: {
padding: '0.3em',
   fontSize: "2.5em",
   display: "block",
   textAlign: " center",
   letterSpacing: "0.3em",
   lineHeight: "0.1",
   marginTop: "1.2em"

  },
  Holder: {
   margin:'1em'
 },
 Valid: {
   textAlign: 'center',
   fontSize: '1em',
   display: 'flex',
   justifyContent:'center'
  },
  Date: {
    fontSize:'2em'
  }
}
const Details = {
  SenderDetails:{
    FullName: "McDocklin Pocks",
    Address: "123 Pig Street",
    State: "Animal States"
  },
  RecieverDetails: {
    FullName: "Cock FlyMan",
    Address: "456 Poultry Farm",
    State: "Bird State"
  },
}
const SecondQuestion = (props) => {
  const { Details } = props;
  return (
    <div style = {styles.envelope}>
      <div style={styles.sender} >
        Sender
         <div>{props.Details.SenderDetails.FullName} </div>
         <div>{props.Details.SenderDetails.Address} </div>
         <div>{props.Details.SenderDetails.State} </div>
         
    </div>
      <div style={styles.reciever}>
        Reciever
         <div>{props.Details.RecieverDetails.FullName} </div>
         <div>{props.Details.RecieverDetails.Address} </div>
         <div>{props.Details.RecieverDetails.State} </div>
        </div>
      <div style = {styles.stamp} > <span style = {styles.stampText}>Stamp</span></div>
    </div>
  )
}
const styles = {
  envelope: {
    border: "2em double black ",
    height: '80vh',
    width: "60vw",
    margin: " auto",
    fontFamily: 'cursive'
  },
  sender: {
    height: '7em',
    textAlign: 'center',
    width: "10em",
    border:'2px dotted',
    fontFamily: 'cursive'
  },
  reciever: {
    marginTop: '10em',
    marginRight: '13em',
    float: 'right',
    height: '7em',
    textAlign: 'center',
    width: "10em",
    border:'2px dotted',
    fontFamily: 'cursive'
  },
  stamp: {
    position:  'relative',
    border: '2px solid',
    fontSize: '3em',
    textAlign: 'center',
     height: "7rem",
    width: "10rem",
    top: '-7rem',
    marginLeft: 'auto',
    content: "stamp"
  },
  stampText:{
    position: 'absolute',
    color: 'gray',
    transform: 'rotate(-45deg)',
    top: '16px'
  }
}
const ReactPictureMessage = {
  Hello: 'React',
  Message: 'The best thing since jQuery, probably.'
}
const ReactPicture = (props) => {
  const{ ReactPictureMessage } = props;
  return (
      <div style = {PageStyle.Image}>
      <img src={picture} style={PageStyle.logo} alt="Sorry we don't know what is wrong" />
      <div style={PageStyle.text} >{props.ReactPictureMessage.Hello} </div>
      <div style = {PageStyle.message} >{props.ReactPictureMessage.Message} </div>
      </div>
  )
}
const PageStyle = {
  Image:{
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    color: 'skyBlue',
    margin: '5em auto',
    width: '38em',
    padding: '2em'
  },
  logo: {
    border: '0.3em solid skyBlue',
    margin: '0 auto'
  },
  text: {
    margin: 'auto',
    fontSize: '4em'
  },
  message: {
    fontSize: '1.8em',
    textAlign: 'center',
  }
}

const Content = {
  Sender: 'Big Boss',
  Date: '29 June 2020',
  Message: 'This the story of brother who slept and woke up in forever land. Mr. Angel I\'m a stranger I don\'t know what is going on; the last thing I remember is sleeping and waking up',
  Subject: 'A song'
}
const EmailStyle = {
  heading: {
    display: 'flex',
    fontFamily: 'cursive',
    fontSize: '2.5em',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: '0.5em'
  },
  emailBody: {
    fontFamily: 'cursive',
    fontSize: '1.5em'
  },
  container: {
    backgroundColor: 'gray',
    padding:'1.5em'
  }
}

const Email = (props) => {
  const { Content } = props;
  return (
    <div style = {EmailStyle.container} >
      <div style = {EmailStyle.heading}  >
        <div>{props.Content.Sender}</div>
      <div>{props.Content.Subject}</div>
        <div>{props.Content.Date}</div>
      </div>
    <div style = {EmailStyle.emailBody} >{props.Content.Message}</div>
    </div>
  )
}




ReactDOM.render([<div style = {PageStyle.message}>1</div>,<Fish/>,<div style = {PageStyle.message}>2</div>,<SecondQuestion Details = {Details}/>,<div style = {PageStyle.message}>3</div>,<ReactPicture ReactPictureMessage = {ReactPictureMessage} />,<div style = {PageStyle.message}>4</div>, <Email Content = {Content}/>],document.querySelector('#root'));
