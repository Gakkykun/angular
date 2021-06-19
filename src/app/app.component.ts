import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeLetters = false
  includeNumbers = false
  includeSymbols = false
  password = ''
  passwordLength = 0

  onChangeLength(eventTarget: EventTarget) {
    const value:string = (eventTarget as HTMLInputElement).value
    const length = Number(value)

    if(Number.isInteger(length)){
      this.passwordLength = length
    }
  }
  
  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters
  }
  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers
  }
  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols
  }

  onButtonClick(){
    const numbers = '1234567890'
    const letters = 'abcdefghijklmnlmnopqrstuvwyz'
    const symbols = '!@#$&^()*'

    let validChars =''
    if(this.includeLetters){
      validChars += letters
    }
    if(this.includeNumbers){
      validChars += numbers
    }
    if(this.includeSymbols){
      validChars += symbols
    }

    let generatedPassword = ''
    for(let i=0; i<this.passwordLength; i++){
      const index = Math.floor(Math.random()*validChars.length)
      generatedPassword += validChars[index]
    }

    this.password = generatedPassword
  }


}
