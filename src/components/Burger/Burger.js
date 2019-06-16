import React from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';


const burger = (props) =>{
    let transformedIng = Object.keys(props.ingredients).map(igkey => {
        return  [...Array(props.ingredients[igkey])].map((_, i) => {
             return   <BurgerIngredient type = {igkey} key = {igkey + i}/>
            });
        })
        
        .reduce((arr,ig) =>{
            return( arr.concat(ig))
        }, []);

     if(transformedIng.length === 0){
         transformedIng = <p>Please add an ingredient</p>
     };

    return (
    <div className = 'burger'>
        <BurgerIngredient type = 'bread-top'/>
        {transformedIng}
        <BurgerIngredient type = 'bread-bottom'/>
    </div> 
    )
}

export default burger;