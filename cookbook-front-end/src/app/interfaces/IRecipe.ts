import {Page} from './Page';

export interface IRecipe {
    id: number;
    name: string;
    date_created: Date;
    description: string;
    parent_id: number;
    parentRecipe: IRecipe;
    childrenRecipe: Page<IRecipe>;
}
