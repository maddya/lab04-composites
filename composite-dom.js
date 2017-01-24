var DomElement = (function () {
    function DomElement(elementName) {
        this.elementName = elementName;
        this.elements = [];
    }
    DomElement.prototype.print = function () {
        console.log("<" + this.elementName + ">");
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var element = _a[_i];
            element.print();
        }
        console.log("</" + this.elementName + ">");
    };
    DomElement.prototype.addElement = function (element) {
        this.elements.push(element);
    };
    return DomElement;
}());
var TextNode = (function () {
    function TextNode(text) {
        this.text = text;
    }
    TextNode.prototype.print = function () {
        console.log(this.text);
    };
    return TextNode;
}());
// Testing code:
var html = new DomElement("html");
var body = new DomElement("body");
html.addElement(body);
var p1 = new DomElement("p");
body.addElement(p1);
var text1 = new TextNode("Hi, I am a TextNode being printed!");
p1.addElement(text1);
var p2 = new DomElement("p");
body.addElement(p2);
var text2 = new TextNode("TextNode == leaf");
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
