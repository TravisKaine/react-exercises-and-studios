import React from 'react';
import styles from './Description.module.css';

let recipeTitle = "Chicken Noodle Soup";
let recipeShortDesc = "Take the time to make Chicken Noodle Soup from scratch and you’ll never be able to make it another way again!";

function RecipeAuthor() {
  let authorLink = "https://tastesbetterfromscratch.com/";
  let authorPhoto = "https://tastesbetterfromscratch.com/wp-content/uploads/2023/02/20220826_Gilbert_Lifestyle_Magazine_Chef_Cookbook_Cookies-0024-1-scaled.jpeg";
  let authorName = "LAUREN ALLEN";

  return (
    <div className={styles.recipeAuthorBlock}>
       <img src={authorPhoto} alt="LAUREN ALLEN" className={styles.imageUpdates} width="300px" />
       <div>
          <h3>{authorName}</h3>
          <a href={authorLink}>Tastes Better From Scratch</a> 
       </div>
    </div>
 );
}

class RecipeDescription extends React.Component {
  render() {
    return (
      <div> 
      <div>
         <h1>{recipeTitle}</h1>
         <p>{recipeShortDesc}</p>
      </div>
        <RecipeAuthor />
      </div>
    )
  }
}

export default RecipeDescription;