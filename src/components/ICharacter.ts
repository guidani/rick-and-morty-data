type TOrigin = {
  name: string;
};

type TLocation = {
  name: string;
};

export interface ICharacter {
  id: number;
  name: string;
  image?: string;
  status?: string;
  species?: string;
  gender?: string;
  origin?: TOrigin;
  location?: TLocation;
}