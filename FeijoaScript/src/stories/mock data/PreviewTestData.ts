import RecipePreview from "../../Models/PreviewModel.ts";

const testPreview1:RecipePreview = {description: "This Lasagna Recipe is easy to make with a creamy ricotta cheese mixture, savory meat sauce, and mozzarella cheese. BONUS: it’s make-ahead and freezer-friendly!",
    id: "asdftglkhi234542klkkjlpikkolmk",
    image: undefined,
    name: "easy lasagna",
    ownedBy: "10001"}

const testPreview2:RecipePreview = {description: "This New England Clam Chowder recipe has a creamy broth that's loaded with delicious clams, savory bacon, simple seasonings, and perfectly cooked potatoes",
    id: "asdftglkhi24sr35klkkjlpikkolmk",
    image: undefined,
    name: "Clam Chowder",
    ownedBy: "10001"}

const testPreview3:RecipePreview = {description: "This Shrimp Alfredo is easy to make and has the best homemade sauce that's perfect for serving with pasta.",
    id: "asdftglkhi2q3s35klkkjlpikkolmk",
    image: undefined,
    name: "Shrimp Alfredo",
    ownedBy: "10001"}

export let TestPreviewList1 = [testPreview1, testPreview2, testPreview3] as RecipePreview[];
export let TestPreviewList2 = [testPreview3, testPreview1, testPreview2] as RecipePreview[];
export let TestPreviewList3 = [testPreview1, testPreview2] as RecipePreview[];
export let TestPreviewList4 = [testPreview2,testPreview1,testPreview3] as RecipePreview[];


