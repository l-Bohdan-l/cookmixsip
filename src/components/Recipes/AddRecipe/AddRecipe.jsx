import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  AddIngredientButton,
  ChooseAlcoholType,
  FormStyled,
  IngredientWrapper,
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

const AddRecipe = () => {
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
  };
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
            <LabelStyled htmlFor="ingredients">
              Ingredients
              <InputStyled
                id="ingredients"
                type="text"
                name="ingredients[0].ingredientsName"
                placeholder="Sugar"
              />
              <InputStyled
                id="ingredients"
                type="text"
                name="ingredients[0].ingredientsAmount"
                placeholder="1 gram"
              />
              <ErrorMessage name="ingredientsName" component="p" />
              <ErrorMessage name="ingredientsAmount" component="p" />
            </LabelStyled>
            <AddIngredientButton type="button">
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

          <SubmitButton type="submit">Submit</SubmitButton>
        </FormStyled>
      </Formik>
    </Section>
  );
};

export default AddRecipe;
