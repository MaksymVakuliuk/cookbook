export interface IRecipe {
    id: number;
    name: string;
    description: string;
    parentId: number;
    // parentRecipe: IRecipe;
    // childrenRecipe: IRecipe[];
}
