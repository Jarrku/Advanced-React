/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface ItemCreateInput {
  title: string;
  description: string;
  image?: string | null;
  largeImage?: string | null;
  price: number;
}

export interface ItemUpdatesInput {
  id: string;
  title?: string | null;
  description?: string | null;
  price?: number | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
