import React from 'react';
import Search from './Search'
import SearchedSongs from './SearchedSongs'
import Loading from './Loading'
import AddToPlaylistForm from './AddToPlaylistForm'
import {Link} from 'react-router-dom'

class Home extends React.Component{

  render(){
    return(
      <div className="home">
      <h1>Home</h1>

      {this.props.login ? (
        <div className="container">
        <h2>Search For Your Favorite Song:</h2>
        <Search fetchSearchedSongs={this.props.fetchSearchedSongs} />
        {this.props.searchedSongs.length === 0 && this.props.loading ? (<Loading />) :
        this.props.searchedSongs.map((track, i) => (
          <SearchedSongs
            key={i}
            track={track}
            addToPlaylist={this.props.addToPlaylist}
            playlist={this.props.playlist}
          />
        ))}
      </div>
    ) : (
        <h2>Welcome to Playlister! Please <Link to={"/login"} >Log in</Link> or <Link to={"/signup"}>Register</Link></h2>
    )
  }

      </div>
    )
  }
}
export default Home;
