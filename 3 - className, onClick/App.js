const header = <h1 className="title">Witaj na stronie!</h1>

const classBig = 'big';
const handleClick = () => alert('klik!');

/*
  onClick={alert("kliknął")} wykona się od razu po wczytaniu strony i po kliknięciu

  onClick={function(){alert("kliknął")}} wywoła się jedynie po kliknięciu

  elentualnie

  onClick={()=>alert("kliknął")}
 */
const main = (
  <div>
    <h1 className="red" onClick={()=>alert("kliknął")}>Pierwszy artykuł</h1>
    <p onClick={handleClick}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies velit finibus mauris iaculis vulputate. Vivamus nec magna id purus facilisis laoreet. Nullam tempus interdum mauris, nec iaculis nisi lacinia id. Sed orci mi, posuere vel iaculis congue, bibendum ultrices nisl. Pellentesque mollis libero accumsan felis sodales fringilla. Donec posuere vel diam nec finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et pharetra nisi. Praesent luctus imperdiet iaculis. Proin augue nisi, lacinia ac sapien at, ultricies condimentum massa. Praesent aliquet cursus arcu sit amet fermentum. Integer eget tortor sit amet mauris ullamcorper maximus. Vivamus faucibus accumsan odio, a ornare velit suscipit vitae. Curabitur maximus massa at fermentum sagittis. 
    </p>
  </div>
)

const footer = (
  <footer>
    <p className={classBig}>Stopka</p>
  </footer>
)

// ReactDOM.render(header, document.getElementById('root'));

const app = [header, main, footer]
ReactDOM.render(app, document.getElementById('root'));