import React from 'react'
import { 
    ListItem, 
    Checkbox,
    Icon,
    Ripple
  } from 'react-onsenui'

export default props => {
    const { todo, onCheckboxClick, onDeleteClick } = props
   
    let textStyle = {
        flexGrow: 8
    };
    
    if(todo.checked){
        textStyle = {
            ...textStyle,
            textDecoration: 'line-through',
            color: '#999999'
        }
    }

    return(
        <ListItem>
            <div className='left'>
                <Checkbox onChange={onCheckboxClick} checked={todo.checked}/>
            </div>
            <div className='center' style={{display:'flex'}}>
                <span style={textStyle}>{todo.value}</span>
                <div style={{flexGrow:2, textAlign: 'center'}} onClick={onDeleteClick}>
                    <Ripple />
                    <Icon icon="fa-times-circle"/>
                </div>
            </div>
        </ListItem>
    );
}