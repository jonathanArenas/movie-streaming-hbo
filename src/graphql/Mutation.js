import { gql } from "@apollo/client";

export const CREATE_MOVIE = gql`
mutation createNote($title: String!, $description: String!, $image: String!, $released: String!){
    createNote(input: {title: $title, description: $description, image:$image, released: $released}){
        _id
        title 
        description
        likes
        image
        realeased
    }
  
}
`
export const REMOVE_MOVIE = gql`
mutation removeMovie($id: ID!){
    removeMovie(id: $id){
        title 
        description
        likes
        image
        realeased
    }
}
`
export const UPDATE_MOVIE = gql`
mutation updateMovie($title: String!, $description: String!, $image: String!, $released: String!, $_id: ID){
    updateMovie(input: {title: $title, description: $description, image:$image, released: $released} ,  _id : $_id) {
        _id
        title 
        description
        likes
        image
        realeased
    }
}
`

export const CREATE_USER = gql`
mutation createUser($email: String!, $password: String!){
    createUser(input: {email: $email, password: $password})
}
`