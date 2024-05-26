import PropTypes from 'prop-types'

function ShoppingListItem({i}){
    const styles = {
        color: i.isCompleted ? "grey": "red",
        textDecoration: i.isCompleted ? "line-through" : "none"
    }
    return(
        <li key={i.id} style={styles}>
            {i.name} - {i.quantity}
        </li>
    );
}

ShoppingListItem.propTypes={
    id: PropTypes.number,
    name: PropTypes.string,
    quantity: PropTypes.number,
    isCompleted: PropTypes.bool,
};


export default ShoppingListItem;