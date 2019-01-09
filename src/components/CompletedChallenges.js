import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/challenges/completed_challenges.css';

class CompletedChallenges extends React.Component {
  render(){
    if (this.props.user) {
      let wholeChallenge = this.props.user.favorites.find(fav => fav.challenge.id === parseInt(this.props.match.params.id,10))
      
      return (
        <div className='completed-challenges__container'>
          <div className='completed-challenges__headline'>
            <h1>{wholeChallenge.challenge.content}</h1>
            <p id='show-rating'>Rating: {wholeChallenge.challenge.rating}/10</p>
          </div>
            
          <div className='completed-challenges__links-container'>
            <div>
              <div className='completed-challenges__link'>See it on Github: <a href={`http://${wholeChallenge.git_link}`} target='_blank'>{wholeChallenge.git_link }</a></div>
              <div className='completed-challenges__link'>See it in Action: <a href={`http://${wholeChallenge.live_link}`} target='_blank'>{wholeChallenge.live_link }</a></div>
            </div> 
          </div>  
        </div>
      )
    } else {
      return (
        <div className="log-in-reminder"><h1>Please <Link to='/'>log in</Link>  to view challenges</h1></div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {...state.users}
}

export default connect(mapStateToProps)(CompletedChallenges);
