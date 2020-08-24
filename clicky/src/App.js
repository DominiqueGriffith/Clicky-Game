import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    
  };

  shuffle = () => {
    // var playerScore = 0
    const friends = this.state.friends
    var currentIndex = friends.length, temporaryValue, randomIndex;
    // Fisher-Yates (aka Knuth) Shuffle Below via Stack overflow
    
    
    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

     
      temporaryValue = friends[currentIndex];
      friends[currentIndex] = friends[randomIndex];
      friends[randomIndex] = temporaryValue;
      
    }

//     if (friend.id !== id){
//       playerScore++;
// console.log(playerScore)
//     }
//     else {
//       console.log("YOU LOSE")
//       location.reload()

//     }
    
return this.setState({ friends });


// PSEUDO CODE:
// IF USER'S GUESS IS NOT EQUAL TO PREVIOUSLY CLICKED THEN SHUFFLE AND SCORE GOES UP
// IF USER'S GUESS IS EQUAL TO PREVIOUSLY CLICKED THEN USER LOSES


    
  }
  // reply_click = () => {
    // var friendId = friends[0].id
    // var clicked= this.state.friends.filter(friendId)
    // console.log(friend.id)
    // // Filter this.state.friends for friends with an id equal to the selected id 
    // const friends = this.state.fri ends.filter(friend => friend.id === id);
    // // Set this.state.friends equal to the new friends array
    // this.setState({ friends });
  // };


 
  



// Map over this.state.friends and render a FriendCard component for each friend object
render() {
  return (
    <Wrapper>
      <Title>Iconic 90s Video Games</Title>
      {this.state.friends.map(friend => (
        <FriendCard
        // duplicateFriend={this.duplicateFriend}
        // reply_click={this.reply_click}
          shuffle={this.shuffle}
          id={friend.id}
          key={friend.id}
          name={friend.name}
          image={friend.image}
          occupation={friend.occupation}
          location={friend.location}
        />
      ))}
    </Wrapper>
  );
}
}

export default App;
