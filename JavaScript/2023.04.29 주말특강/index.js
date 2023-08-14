import Component from "./core.js";

class ProductPage extends Component{
  render(){
    const $button = document.createElement("button");
    $button.innerText = this.props.buttontext;
    return $button;
  }
}

const productPage = new ProductPage({buttontext:"안녕하세요!"});
console.log(productPage.render());
init(productPage.render())

function init($page) {
  const $root = document.querySelector(".root");
  $root.append($page)
}