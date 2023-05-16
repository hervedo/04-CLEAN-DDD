import { randomUUID } from "node:crypto"


export class Question {
  public id: string
  public title: string
  public content: string
  public authorId: string //perguntando
  


  constructor(title: string, content: string, authorId: string, id?: string){
    this.id = id ?? randomUUID()
    this.title = title
    this.content = content
    this.authorId = authorId

  }
  
}