export default function challengeReducer(state = {
  challenges: [],
  lazy_links: [],
  showChallenge: null
}, action) {

  switch(action.type) {
    
    case 'FETCH_CHALLENGES':
      state = {...state, challenges: action.challenges, lazy_links: action.lazy_links}
      return state;
    
    case 'SHOW_CHALLENGE':
      state = {...state, showChallenge: action.challenge}
      return state;
      
    case 'VOTE_UP_CHALLENGE': 
      let updating = state.challenges.find(chall => chall.id === action.id)
      updating.rating = parseInt(updating.rating, 10)
      updating.rating = updating.rating += 1
      return {...state,
          challenges: [...state.challenges.slice(0,action.id).concat(updating), ...state.challenges.slice(action.id+1)]
      };
      
    case 'VOTE_DOWN_CHALLENGE': 
      let updated = state.challenges.find(chall => chall.id === action.id)
      updated.rating = parseInt(updated.rating, 10)
      updated.rating = updated.rating -= 1
     
      return {...state,
        challenges: [...state.challenges.slice(0,action.id).concat(updated), ...state.challenges.slice(action.id+1)]
        };
        
    case 'ADD_CHALLENGE':
      state = Object.assign({}, state, {
        challenges: [...state.challenges.concat(action.challenge)]
        })
      return state;
      
      
    default: 
      return state;
  }
}