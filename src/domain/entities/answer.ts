import { randomUUID } from "node:crypto"


export class Answer {
  public id: string
  public content: string
  public authorId: string  //respondendo
  public questionId: string
  


  constructor(content: string, authorId: string, questionId: string, id?: string){
    this.id = id ?? randomUUID()  
    this.content = content
    this.authorId = authorId
    this.questionId = questionId


  }
  
}