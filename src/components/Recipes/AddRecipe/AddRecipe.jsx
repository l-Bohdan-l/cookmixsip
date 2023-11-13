import { ErrorMessage, Field, Form, Formik, FieldArray } from "formik";
import * as Yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import {
  AddIngredientButton,
  AdditionalIngredientBtn,
  AdditionalIngredientBtnWrapper,
  BtnIcon,
  BtnText,
  ChooseAlcoholType,
  ErrorMsgStyled,
  FormStyled,
  GoBackBtn,
  IngredientMeasureWrapper,
  IngredientWrapper,
  IngredientsListWrapper,
  InputStyled,
  LabelStyled,
  MealTypeWrapper,
  MeasureSelect,
  RadioField,
  RecipeTypeTitle,
  Section,
  SubmitButton,
  Title,
} from "./AddRecipe.styled";
import { TextArea } from "../../TextArea/TextArea";
import { useRef, useState } from "react";
import { useAddRecipeMutation } from "../../../redux/recipe/recipeSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { db } from "../../../firebase/config";
import { useAuth } from "../../../redux/hooks/useAuth";

const AddRecipe = () => {
  const [ingredientCounter, setIngredientCounter] = useState(0);
  const [ingredients, setIngredients] = useState([
    {
      ingredientsName: "",
      ingredientsAmount: "",
      measure: "",
    },
  ]);

  const { authId, authName } = useAuth();

  // const [addRecipe, { data: newRecipe, error, isSuccess }] =
  //   useAddRecipeMutation();

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/");
  const navigate = useNavigate();

  const initialState = {
    name: "",
    description: "",
    url: "",
    ingredients: [
      {
        ingredientsName: "",
        ingredientsAmount: "",
        measure: "",
      },
    ],
    mealType: "",
    alcoholType: "",
  };

  const schema = Yup.object({
    name: Yup.string().required("Please enter name"),
    description: Yup.string(),
    url: Yup.string().matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
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
    mealType: Yup.string().required("Please select type"),
    alcoholType: Yup.string().oneOf(["alcohol", "non-alcohol"], "Invalid Type"),
  });

  const addRecipe = async (values) => {
    await addDoc(collection(db, "recipes"), {
      ...values,
      userName: authName,
      userId: authId,
    });
  };

  const handleSubmit = (values) => {
    // e.preventDefault();
    // console.log("submit", values);
    addRecipe(values);
    navigate("/your-recipes");
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
      <Link to={backLinkRef.current}>
        <GoBackBtn desktop type="button">
          <BtnIcon />
          <BtnText desktop>Go Back</BtnText>
        </GoBackBtn>
      </Link>
      <Title>Add Recipe</Title>
      <Formik
        initialValues={initialState}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange }) => (
          <FormStyled autoComplete="off">
            <LabelStyled htmlFor="name">
              Name
              <InputStyled
                id="name"
                type="text"
                name="name"
                placeholder="Cake"
              />
              <ErrorMsgStyled name="name" component="p" />
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
              // wrap="soft"
              // cols="12"
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
                                // name="ingredients[0].ingredientsName"
                                placeholder="Sugar"
                                // value={ingredient.ingredientsName}
                              />

                              <ErrorMsgStyled
                                name="ingredientsName"
                                component="p"
                              />
                              <IngredientMeasureWrapper>
                                <InputStyled
                                  id="ingredients"
                                  type="text"
                                  // name="ingredients[0].ingredientsAmount"
                                  name={`ingredients[${index}].ingredientsAmount`}
                                  placeholder="1"
                                  // value={ingredient.ingredientsAmount}
                                />
                                <MeasureSelect
                                  component="select"
                                  name={`ingredients[${index}].measure`}
                                  id="ingredients"
                                  // defaultValue={"DEFAULT"}
                                  // value={"DEFAULT"}
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
              {/* <AddIngredientButton type="button" onClick={addIngredient}>
                Add ingredient
              </AddIngredientButton> */}
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
                  // multiple={true}
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
    </Section>
  );
};

export default AddRecipe;
