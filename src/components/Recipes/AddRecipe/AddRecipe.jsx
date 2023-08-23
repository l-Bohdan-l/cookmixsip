import { ErrorMessage, Field, Form, Formik, FieldArray } from "formik";
import * as Yup from "yup";
import {
  AddIngredientButton,
  ChooseAlcoholType,
  FormStyled,
  IngredientWrapper,
  IngredientsListWrapper,
  InputStyled,
  LabelStyled,
  MealTypeWrapper,
  RadioField,
  RecipeTypeTitle,
  Section,
  SubmitButton,
  Title,
} from "./AddRecipe.styled";
import { TextArea } from "../../TextArea/TextArea";
import { useState } from "react";

const AddRecipe = () => {
  const [ingredientCounter, setIngredientCounter] = useState(0);
  const [ingredients, setIngredients] = useState([
    {
      ingredientsName: "",
      ingredientsAmount: "",
    },
  ]);

  const initialState = {
    name: "",
    description: "",
    url: "",
    ingredients: [
      {
        ingredientsName: "",
        ingredientsAmount: "",
      },
    ],
    mealType: "",
    alcoholType: "",
  };
  console.log("ingr", ingredients, "state", initialState.ingredients);
  const schema = Yup.object({
    name: Yup.string(),
    description: Yup.string(),
    url: Yup.string().url(),
    ingredients: Yup.array().of(
      Yup.object({
        ingredientsName: Yup.string(),
        ingredientsAmount: Yup.number(),
      })
    ),
    mealType: Yup.string(),
    alcoholType: Yup.string().oneOf(
      ["alcohol", "non-alcohol"],
      "Invalid Job Type"
    ),
  });
  const handleSubmit = (values) => {
    // e.preventDefault();
    console.log("submit", values);
  };

  const addIngredient = () => {
    setIngredientCounter(ingredientCounter + 1);
    const newIngr = {
      ingredientsName: "",
      ingredientsAmount: "",
    };
    setIngredients((prevState) => [...prevState, newIngr]);
  };

  return (
    <Section>
      <Title>Add Recipe</Title>
      <Formik
        initialValues={initialState}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormStyled autoComplete="off">
          <LabelStyled htmlFor="name">
            Name
            <InputStyled id="name" type="text" name="name" placeholder="Cake" />
            <ErrorMessage name="name" component="p" />
          </LabelStyled>
          {/* <LabelStyled htmlFor="description">
            Description
            <InputStyled
              id="description"
              as="textarea"
              // type="text"
              name="description"
              placeholder="Add sugar"
              onChange={(e) => console.log(e.target.value)}
            />
            <ErrorMessage name="description" component="p" />
          </LabelStyled> */}
          <TextArea
            label="Description"
            name="description"
            placeholder="add sugar"
          />
          <LabelStyled htmlFor="url">
            Url
            <InputStyled
              id="url"
              type="text"
              name="url"
              placeholder="cookmixsip.com"
            />
            <ErrorMessage name="url" component="p" />
          </LabelStyled>
          <IngredientWrapper>
            <LabelStyled id="ingredientLabel" htmlFor="ingredients">
              Ingredients
              <FieldArray name="ingredients">
                {(fieldArrayProps) => {
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { ingredients } = values;
                  console.log("fieldArrayProps", fieldArrayProps);
                  return (
                    <div>
                      {ingredients.map((ingredient, index) => {
                        return (
                          <IngredientsListWrapper key={index}>
                            <InputStyled
                              id="ingredients"
                              type="text"
                              name={`ingredients[${index}].ingredientsName`}
                              // name="ingredients[0].ingredientsName"
                              placeholder="Sugar"
                              // value={ingredient.ingredientsName}
                            />

                            <ErrorMessage
                              name="ingredientsName"
                              component="p"
                            />
                            <InputStyled
                              id="ingredients"
                              type="text"
                              // name="ingredients[0].ingredientsAmount"
                              name={`ingredients[${index}].ingredientsAmount`}
                              placeholder="1 gram"
                              // value={ingredient.ingredientsAmount}
                            />
                            <button
                              type="button"
                              onClick={() => {
                                remove(index);
                              }}
                            >
                              -
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                push({
                                  ingredientsName: "",
                                  ingredientsAmount: "",
                                });
                              }}
                            >
                              +
                            </button>
                            <ErrorMessage
                              name="ingredientsAmount"
                              component="p"
                            />
                          </IngredientsListWrapper>
                        );
                      })}
                    </div>
                  );
                }}
              </FieldArray>
              {/* {ingredients.map((ingredient, index) => {
                return (
                  <IngredientsListWrapper key={index}>
                    <InputStyled
                      id="ingredients"
                      type="text"
                      name={`ingredients[${index}].ingredientsName`}
                      // name="ingredients[0].ingredientsName"
                      placeholder="Sugar"
                      // value={ingredient.ingredientsName}
                    />
                    <ErrorMessage name="ingredientsName" component="p" />
                    <InputStyled
                      id="ingredients"
                      type="text"
                      // name="ingredients[0].ingredientsAmount"
                      name={`ingredients[${index}].ingredientsAmount`}
                      placeholder="1 gram"
                      // value={ingredient.ingredientsAmount}
                    />
                    <ErrorMessage name="ingredientsAmount" component="p" />
                  </IngredientsListWrapper>
                );
              })} */}
              {/* <InputStyled
                id="ingredients"
                type="text"
                name="ingredients[0].ingredientsName"
                placeholder="Sugar"
              />
              <ErrorMessage name="ingredientsName" component="p" />
              <InputStyled
                id="ingredients"
                type="text"
                name="ingredients[0].ingredientsAmount"
                placeholder="1 gram"
              />
              <ErrorMessage name="ingredientsAmount" component="p" /> */}
            </LabelStyled>
            <AddIngredientButton type="button" onClick={addIngredient}>
              Add ingredient
            </AddIngredientButton>
          </IngredientWrapper>
          <div>
            <RecipeTypeTitle>Choose recipe type</RecipeTypeTitle>
            <MealTypeWrapper>
              <LabelStyled>
                Meal
                <RadioField type="radio" name="mealType" value="Meal" />
                <ErrorMessage name="mealType" component="p" />
              </LabelStyled>
              <LabelStyled>
                Cocktail
                <RadioField type="radio" name="mealType" value="Cocktail" />
                <ErrorMessage name="mealType" component="p" />
              </LabelStyled>
            </MealTypeWrapper>
          </div>
          {initialState.mealType === "cocktail" && (
            <LabelStyled htmlFor="alcoholType">
              Choose alcohol type
              <ChooseAlcoholType
                id="alcoholType"
                name="alcoholType"
                component="select"
                // multiple={true}
              >
                <option value="alcohol">Alcohol</option>
                <option value="non-alcohol">Non alcohol</option>
              </ChooseAlcoholType>
              <ErrorMessage name="alcoholType" component="p" />
            </LabelStyled>
          )}

          <SubmitButton type="submit">Submit</SubmitButton>
        </FormStyled>
      </Formik>
    </Section>
  );
};

export default AddRecipe;
