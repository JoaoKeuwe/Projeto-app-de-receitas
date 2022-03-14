import React, { useContext, useEffect } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import Context from '../Context/context';
import RecomendationCard from './RecomendationCard';
import '../styles/startRecipe.css';

export default function Details() {
  const { fetchConditional } = useContext(Context);
  useEffect(() => {
    fetchConditional();
  });

  return (
    <section>
      { drink !== undefined && recipe.map((data, index) => (
        <div key={ index }>
          <img
            width="100px"
            data-testid="recipe-photo"
            alt="recipe"
            src={ data.strDrinkThumb }
          />

          <h2
            data-testid="recipe-title"
          >
            {data.strDrink}
          </h2>
          <button
            type="button"
            data-testid="share-btn"
          >
            share
          </button>
          <button
            type="button"
            data-testid="favorite-btn"
          >
            favorite
          </button>
          <h3>Category</h3>
          <p
            data-testid="recipe-category"
          >
            {data.strCategory}
            {<br /> }
            {data.strAlcoholic}
          </p>
          <h3>Ingredients and Measure</h3>
          <ol>
            { ingredients && ingredients.map(({ ingredient, measure }, indexx) => (
              <li
                key={ indexx }
                data-testid={ `${indexx}-ingredient-name-and-measure` }
              >
                {`${ingredient} - ${measure}`}
              </li>

            )) }
          </ol>
          <h3>Instructions</h3>
          <p
            data-testid="instructions"
          >
            { data.strInstructions }
          </p>
          <h3>Recomendations</h3>
          <Carousel>
            {
              recomendations && recomendations.slice(0, NUM).map((rcard, rindex) => (
                <CarouselItem key={ rindex }>
                  <RecomendationCard
                    key={ rindex }
                    index={ rindex }
                    recipe={ rcard }
                  />
                </CarouselItem>
              ))
            }
          </Carousel>
          <button
            className="start-recipe"
            type="button"
            data-testid="start-recipe-btn"
            onClick={ () => { console.log(ingredients); } }
          >
            Start Recipe
          </button>
        </div>
      ))}
      {meal !== undefined && recipe.map((data, index) => (
        <div key={ index }>

          <img
            width="100px"
            data-testid="recipe-photo"
            alt="recipe"
            src={ data.strMealThumb }
          />

          <h2
            data-testid="recipe-title"
          >
            {data.strMeal}
          </h2>
          <button
            type="button"
            data-testid="share-btn"
          >
            share
          </button>
          <button
            type="button"
            data-testid="favorite-btn"
          >
            favorite
          </button>
          <h3>Category</h3>
          <p
            data-testid="recipe-category"
          >
            {data.strCategory}
          </p>
          <h3>Ingredients and Measure</h3>
          <ol>
            { ingredients && ingredients.map(({ ingredient, measure }, indexxx) => (
              <li
                key={ indexxx }
                data-testid={ `${indexxx}-ingredient-name-and-measure` }
              >
                {`${ingredient} - ${measure}`}
              </li>

            )) }
          </ol>
          <h3>Instructions</h3>
          <p
            data-testid="instructions"
          >
            { data.strInstructions }
          </p>
          <h3>recomendations</h3>
          <Carousel>
            {
              recomendations
              && recomendations.slice(0, (NUM)).map((rcardd, rindexx) => (
                <CarouselItem key={ rindexx }>
                  <RecomendationCard
                    key={ rindexx }
                    recipe={ rcardd }
                    index={ rindexx }
                  />
                </CarouselItem>
              ))
            }
          </Carousel>
          <h3>Video:</h3>
          <iframe
            title="iframe"
            data-testid="video"
            src={ `https://www.youtube.com/embed/${URLvideo}` }
          />
          <button
            className="start-recipe"
            type="button"
            data-testid="start-recipe-btn"
            onClick={ () => { console.log(ingredients); } }
          >
            Start Recipe
          </button>
        </div>
      ))}

    </section>
  );
}
