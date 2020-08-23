import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  shuffle = () => {
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
return this.setState({ friends });
  
    
  }

 
  



// Map over this.state.friends and render a FriendCard component for each friend object
render() {
  return (
    <Wrapper>
      <Title>Iconic 90s Video Games</Title>
      {this.state.friends.map(friend => (
        <FriendCard
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
