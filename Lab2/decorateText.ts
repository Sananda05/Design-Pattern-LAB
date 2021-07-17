abstract class TextClass {

  abstract getInputText():string
  abstract decorateText():string
}

class InputText extends TextClass{

 inputText!: string

 constructor(input:string)
 {
   super()
     this.inputText=input
 }
 public getInputText():string{
     return this.inputText
 }
 public decorateText():string{
     return this.inputText
 }
}

abstract class TextDecorator implements TextClass {

abstract getInputText():string
abstract decorateText():string
}

class BoldText extends TextDecorator {
text
constructor(text : TextClass){
    super()
    this.text =text   
}

getInputText(): string {
return text.inputText
}
decorateText(): string {
return this.text.decorateText().bold()
}

}

class ItalicText extends TextDecorator {
text
constructor(text : TextClass){
    super()
    this.text =text   
}

getInputText(): string {
return text.inputText
}
decorateText(): string {
return this.text.decorateText().italics()
}

}

class StrikeText extends TextDecorator {
text
constructor(text : TextClass){
    super()
    this.text =text   
}

getInputText(): string {
return text.inputText
}
decorateText(): string {
return this.text.decorateText().strike()
}

}

function displayText(text : TextClass)
{
 console.log(text.decorateText())
}


const text = new InputText('Hello from Sananda!')
const italicText = new ItalicText(text)

const boldText = new BoldText(italicText)

const strikeText = new StrikeText(boldText)

displayText(strikeText)


