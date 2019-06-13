import React from 'react';
import { connect } from 'react-redux'


const MeetupsHomepage = ({meetups})=>{
  return (
    <div>
      <h1>Welcome to mock Meetups!</h1>
      {meetups.map(meetupNumber=><div>{meetupNumber}</div>)}
    </div>
  );
}

const mapStateToProps =(state)=>{
  return {
    meetups: state.meetups
  };
}

const mapDispatchToProps = (dispatch)=>{
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MeetupsHomepage);
