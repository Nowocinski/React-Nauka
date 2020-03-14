// const header = (
//   <h1>
//     Witaj na stronie!
//   </h1>
// );
// ReactDOM.render(<Header/>, document.getElementById('root'));








// KOMPONENTY NA PODSTAWIE METOD
// const Header = () => (
//   <h1>
//     Witaj na stronie!
//   </h1>
// );

// const Blog = () => (
//   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies velit finibus mauris iaculis vulputate.</p>
// ) 

// const Contener = () => (
//   <>
//     <Header/>
//     <Blog/>
//   </>
// )

// // lub

// const Contener2 = () => {
//   return (
//     <>
//       <Header/>
//       <Blog/>
//     </>
//   )
// }

// ReactDOM.render(<Contener2/>, document.getElementById('root'));







// KOMPONENTY NA PODSTAWIE KLAS
class Header extends React.Component {
  render() {
    return (
      <h1>
        Witaj na stronie!
      </h1>
    );
  }
}

class Blog extends React.Component {
  render() {
    return (
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies velit finibus mauris iaculis vulputate.</p>
    )
  }
}

class Contener extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <Blog/>
      </>
    );
  }
}

ReactDOM.render(<Contener/>, document.getElementById('root'))