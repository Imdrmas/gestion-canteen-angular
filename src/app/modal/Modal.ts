export interface Canteen {
  id: number;
  open: string;
  close: string;
  capacity: number;
  cook: Cook;
  meals: Meal[];
}

export interface Meal {
  id: number;
  name: string;
  description: string;
  canteen: Canteen;
  recipeMeals: RecipeMeal[];
}
export interface Cook {
  id: number;
  firstname: string;
  lastname: string;
  recipeMeals: RecipeMeal[];
}

export interface Student {
  id: number;
  firstname: string;
  lastname: string;
  addedAt: any;
}

export interface RecipeMeal {
  id: number;
  name: string;
  description: string;
  meal: Meal;
  cook: Cook;
  photo: string;
}
