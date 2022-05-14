import propTypes from 'prop-types'
import Button from "./Button";
const Header = ({title, onAdd ,showAdd}) =>{
    const onClick = () => {
        console.log('Click')
    }
    return(
     <header className="header">
        <h1 >{title}</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
     </header>   
    )
}

Header.defaultProps = {
    title: 'Track courses react Task',
}

//CSS in js
// const Headingstyle = {
//     color:'red',
//     backgroundColor: 'blue',
// }

// Header.propTypes = {
//     title: PropTypes.string.isRequired,
// }

export default Header;