import PropTypes from 'prop-types';

// function Titulo(props) {
//     console.log(props);
//     return ( <h1>Hola {props.nombre} {props.apellido}</h1> );
// }

function Titulo({nombre, apellido}) {
    return ( <h1>Hola {nombre} {apellido}</h1> );
}

Titulo.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string
};

export default Titulo;