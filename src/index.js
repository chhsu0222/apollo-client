import ApolloBoost, { gql } from 'apollo-boost'

// Create a client
const client = new ApolloBoost({
    uri: 'http://localhost:4000'
})

// Send a query with plain Javascript. Remember to first import the 
// gql function for parsing your query string into a query document.
const getUsers = gql`
    query {
        users {
            id
            name
        }
    }
`

client.query({
    query: getUsers
}).then((response) => {
    let html = ''

    response.data.users.forEach((user) => {
        html += `
            <div>
                <h3>${user.name}</h3>
            </div>
        `
    })

    document.getElementById('users').innerHTML = html
})

const getPosts = gql`
    query {
        posts {
            title
            author {
                name
            }
        }
    }
`

client.query({
    query: getPosts
}).then((response) => {
    let html = ''

    response.data.posts.forEach((post) => {
        html += `
            <div>
                <h3>${post.author.name} - ${post.title}</h3>
            </div>
        `
    })

    document.getElementById('posts').innerHTML = html
})

