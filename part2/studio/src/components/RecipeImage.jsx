import recipedata from './recipe.json'
import './styling.css'

function RecipeImage() {

  let recipeImage = recipedata.map(recipe => {
    return <img key={recipe.name} scr = {recipe.recipeImage} alt={recipe.name}
    className='recipeImage'/>
  })

   return <div>{recipeImage}</div>;
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 