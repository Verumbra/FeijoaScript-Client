import type { Preview } from "@storybook/react";
import {Story} from "@storybook/blocks";
import {configureStore} from "@reduxjs/toolkit";
import userSlice from "../src/slices/UserSlice";
import recipeListSlice from "../src/slices/RecipeSlice";
import viewSlice from "../src/slices/ViewSlice";

import { Provider } from "react-redux";


const store = configureStore({
  reducer: {
    user: userSlice,
    recipeList: recipeListSlice,
    view: viewSlice,
  }
});



const preview: Preview = {
  decorators: [
    (Story:any) => (
        <Provider store={store}>
            <Story />
            </Provider>
    )
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

};

export default preview;
