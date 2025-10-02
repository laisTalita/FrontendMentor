function Item_form({item,comparison}) {
    return(
       <>
        {item.map(item =>(
           <li
            key={item.value}
            className={item.value ==='header'?'dropdown-header': 
            comparison === item.value? 'selecionado dropdown-item':'dropdown-item'}>
                {item.label}
            </li>
            ))}
        <hr/>
        </>
    )
}export default Item_form