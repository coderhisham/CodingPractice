import ShoppingListItem from "./ShoppingListItem"
function ShoppingList({items}){

    return(
        <ul>
            {items.map((i)=>(
                <ShoppingListItem i={i} key={i.id}/>
            ))}
        </ul>
    );

}

export default ShoppingList;