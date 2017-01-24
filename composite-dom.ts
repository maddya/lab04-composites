interface IDomElement {
  print();
}

class DomElement implements IDomElement {
  protected elements:IDomElement[];
  protected elementName:string;
  
  constructor(elementName:string) {
    this.elementName = elementName;
    this.elements = [];
  }
  
  print(){
    console.log("<" + this.elementName + ">");
    for (let element of this.elements) {
      element.print();
    }
    console.log("</" + this.elementName + ">");
  }
  
  addElement(element:IDomElement) {
    this.elements.push(element);
  }
}

class TextNode implements IDomElement {
  protected text:string;

  constructor(text:string) {
    this.text = text;
  }

  print(){
    console.log(this.text);
  }
}

// Testing code:
let html:DomElement = new DomElement("html");
let body:DomElement = new DomElement("body");
html.addElement(body);
let p1:DomElement = new DomElement("p");
body.addElement(p1);
let text1:TextNode = new TextNode("Hi, I am a TextNode being printed!");
p1.addElement(text1);
let p2:DomElement = new DomElement("p");
body.addElement(p2);
let text2:TextNode = new TextNode("TextNode == leaf");
p2.addElement(text2);

html.print();




// interface Component {
//   doThis();
// }

// class Leaf implements Component {
//   doThis(){}
// }

// class Composite implements Component {
//   protected elements:Component[];
  
//   addElement(){}

//   doThis() {
//     for (let element of this.elements) {
//       element.doThis();
//     }
//   }
// }

