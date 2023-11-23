import { Formik, FieldArray } from "formik";
import * as Yup from "yup";

import {
  AdditionalIngredientBtn,
  AdditionalIngredientBtnWrapper,
  ChooseAlcoholType,
  ErrorMsgStyled,
  FormStyled,
  IngredientMeasureWrapper,
  IngredientWrapper,
  IngredientsListWrapper,
  InputStyled,
  LabelStyled,
  MealTypeWrapper,
  MeasureSelect,
  RadioField,
  RecipeTypeTitle,
  SubmitButton,
} from "./RecipeForm.styled";
import { TextArea } from "../TextArea/TextArea";

export const RecipeForm = ({ onSubmit, recipeInfo }) => {
  const initialState = {
    name: recipeInfo?.name ?? "",
    description: recipeInfo?.description ?? "",
    url: recipeInfo?.url ?? "",
    ingredients: recipeInfo?.ingredients ?? [
      {
        ingredientsName: "",
        ingredientsAmount: "",
        measure: "",
      },
    ],
    mealType: recipeInfo?.mealType ?? "",
    alcoholType: recipeInfo?.alcoholType ?? "",
    createdAt: recipeInfo?.createdAt || Date.now(),
    updatedAt: recipeInfo?.updatedAt || Date.now(),
  };

  const schema = Yup.object({
    name: Yup.string(),
    description: Yup.string(),
    url: Yup.string().matches(
      /((https?):\/\/)?(www.)?[a-z0-9-]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9-]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!"
    ),

    ingredients: Yup.array().of(
      Yup.object({
        ingredientsName: Yup.string(),
        ingredientsAmount: Yup.number(),
        measure: Yup.string().oneOf(
          ["g", "tsp", "ml", "tbsp", "cup", "l", "kg", "pcs"],
          "Invalid Type"
        ),
      })
    ),
    mealType: Yup.string(),
    // .required("Please select type")
    alcoholType: Yup.string().oneOf(["alcohol", "non-alcohol"], "Invalid Type"),
    createdAt: Yup.date(),
    updatedAt: Yup.date(),
  });
  console.log("initialState", initialState);
  return (
    <Formik
      initialValues={initialState}
      validationSchema={schema}
      onSubmit={() => {
        console.log("submit");
        onSubmit();
      }}
      enableReinitialize
    >
      {({ values, handleChange }) => (
        <FormStyled autoComplete="off">
          <LabelStyled htmlFor="name">
            Name
            <InputStyled id="name" type="text" name="name" placeholder="Cake" />
            <ErrorMsgStyled name="name" component="p" />
          </LabelStyled>
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
            <ErrorMsgStyled name="url" component="p" />
          </LabelStyled>
          <IngredientWrapper>
            <LabelStyled id="ingredientLabel" htmlFor="ingredients">
              Ingredients
              <FieldArray name="ingredients">
                {(fieldArrayProps) => {
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { ingredients } = values;

                  return (
                    <div>
                      {ingredients.map((ingredient, index) => {
                        return (
                          <IngredientsListWrapper key={index}>
                            <InputStyled
                              id="ingredients"
                              type="text"
                              name={`ingredients[${index}].ingredientsName`}
                              placeholder="Sugar"
                            />

                            <ErrorMsgStyled
                              name="ingredientsName"
                              component="p"
                            />
                            <IngredientMeasureWrapper>
                              <InputStyled
                                id="ingredients"
                                type="text"
                                name={`ingredients[${index}].ingredientsAmount`}
                                placeholder="1"
                              />
                              <MeasureSelect
                                component="select"
                                name={`ingredients[${index}].measure`}
                                id="ingredients"
                                value={ingredient.measure}
                                onChange={handleChange}
                              >
                                <option value="" disabled>
                                  --Select--{" "}
                                </option>

                                <option value="g">g</option>
                                <option value="tsp">tsp</option>
                                <option value="ml">ml</option>
                                <option value="tbsp">tbsp</option>
                                <option value="cup">cup</option>
                                <option value="l">l</option>
                                <option value="kg">kg</option>
                                <option value="pcs">pcs</option>
                              </MeasureSelect>
                              <ErrorMsgStyled
                                name={`ingredients[${index}].measure`}
                                component="p"
                              />
                            </IngredientMeasureWrapper>
                            <AdditionalIngredientBtnWrapper>
                              <AdditionalIngredientBtn
                                type="button"
                                onClick={() => {
                                  push({
                                    ingredientsName: "",
                                    ingredientsAmount: "",
                                    measure: "",
                                  });
                                }}
                              >
                                +
                              </AdditionalIngredientBtn>
                              {ingredients.length > 1 && (
                                <AdditionalIngredientBtn
                                  type="button"
                                  onClick={() => {
                                    remove(index);
                                  }}
                                >
                                  -
                                </AdditionalIngredientBtn>
                              )}
                            </AdditionalIngredientBtnWrapper>
                            <ErrorMsgStyled
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
            </LabelStyled>
          </IngredientWrapper>
          <div>
            <RecipeTypeTitle>Choose recipe type</RecipeTypeTitle>
            <MealTypeWrapper>
              <LabelStyled>
                Meal
                <RadioField type="radio" name="mealType" value="Meal" />
                <ErrorMsgStyled name="mealType" component="p" />
              </LabelStyled>
              <LabelStyled>
                Cocktail
                <RadioField type="radio" name="mealType" value="Cocktail" />
                <ErrorMsgStyled name="mealType" component="p" />
              </LabelStyled>
            </MealTypeWrapper>
          </div>
          {values.mealType === "Cocktail" && (
            <LabelStyled htmlFor="alcoholType">
              Choose alcohol type
              <ChooseAlcoholType
                id="alcoholType"
                name="alcoholType"
                component="select"
              >
                <option value="" disabled>
                  --Select--
                </option>
                <option value="alcohol">Alcohol</option>
                <option value="non-alcohol">Non alcohol</option>
              </ChooseAlcoholType>
              <ErrorMsgStyled name="alcoholType" component="p" />
            </LabelStyled>
          )}

          <SubmitButton type="submit">Submit</SubmitButton>
        </FormStyled>
      )}
    </Formik>
  );
};
