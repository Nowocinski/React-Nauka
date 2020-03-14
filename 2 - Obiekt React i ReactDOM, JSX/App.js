console.log(React);
console.log(ReactDOM);

const element = <div>Pierwszy element React</div>

const element2 = React.createElement(
    "div",
    null,
    "Pierwszy element"
);

// zadziała
const element3 =
<div>
    <p>Tekst</p>
</div>

// zadziała
const element4 = (
<div>
    <p>Tekst</p>
</div>
)

// zadziała
const element5 = <div><p>Tekst</p></div>

// nie zadziała, elementy nie są w elemencie nadrzędnym
// const element5 = (
//     <section></section>
//     <section></section>
// )

const element6 = (
    <div>
        <section></section>
        <section></section>
    </div>
)

const element7 = (
    <React.Fragment>
        <section></section>
        <section></section>
    </React.Fragment>
)

// zadziała tak samo jak <React.Fragment> ... </React.Fragment>
const element8 = (
    <>
        <section></section>
        <section></section>
    </>
)