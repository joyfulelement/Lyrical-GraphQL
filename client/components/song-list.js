import React, {Component} from "react";
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
/**
 * GraphQL + React Strategy
 *
 * 1. Identify data required
 * 2. Write query in Graphiql (for practice) and in component file
 * 3. Bond query + component
 * 4. Access data
 *
 * No step about make sure query or ajax gets executed, because Apollo takes care of it.
 */

class SongList extends Component {
  renderSongs() {
    return this
      .props
      .data
      .songs
      .map(song => {
        return (
          <li key={song.id} className="collection-item">
            {song.title}
          </li>
        )
      })

  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>
    }
    return (
      <ul className="collection">
        {this.renderSongs()}
      </ul>
    )
  }
}

//Query will be executed automatically when component rendered
const query = gql `
    {     
        songs {
          id
          title
        }
    }
`;

export default graphql(query)(SongList);