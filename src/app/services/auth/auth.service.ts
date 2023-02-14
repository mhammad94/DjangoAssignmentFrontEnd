import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apollo: Apollo) { }

  login(userName:string, password:string){
      return this.apollo.mutate({
        mutation:gql`
          mutation AuthMutation($userName:String, $password:String!){
            tokenAuth(username:$userName, password:$password){
              success,
              errors,
              token,
              refreshToken,
              user{
                id,
                username,
                firstName,
                lastName
              }
            }
          }
        `,variables:{
          userName, password
        }
      }).pipe(map((result:any) => {
        return result.data.tokenAuth
      }))
  }

  createUser(email:string,userName:string, password:string, firstName:string, lastName:string){
      return this.apollo.mutate({
        mutation:gql`
        mutation AuthMutation($userName:String!, $password:String!, $firstName:String!, $email:String!, $lastName:String!){
          register(
            username:$userName, 
            password1:$password, 
            password2:$password, 
            firstName:$firstName, 
            lastName:$lastName, 
            email:$email
            ){
            success,
            errors
          }
        }
        `,variables:{
          userName,
          password,
          firstName,
          lastName,
          email
        }
      }).pipe(map((result:any) => {
        return result.data.register
      }))
  }
}
