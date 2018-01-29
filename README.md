# Lyrical-GraphQL
Starter project from a GraphQL course on Udemy.com

# Useful GraphQL Queries


```
mutation {
  addSong(title:"Warm Night"){
    id
  }
}
```
```

mutation {
  addLyricToSong(songId:"5a6e508a52d93b2820afd606", content:"tonight...it's warm~"){
    id
  }
}


```

```
{
  songs {
    id
    title
    lyrics {
      content
    }
  }
}
```