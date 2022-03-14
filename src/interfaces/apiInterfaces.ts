
export interface IInfo {
  count: number;
  next: null | string;
  pages: number;
  prev: null | string;
};

export interface ICharacterLocation {
  name: string;
  url: string;
};

export interface IPersonage {
  created: string;
  episode: string[];
  gender: "unknown" | "Female" | "Male" | "Genderless";
  id: number;
  image: string;
  location: ICharacterLocation;
  name: string;
  origin: ICharacterLocation;
  species: string;
  status: "Dead" | "Alive" | "unknown";
  type: string;
  url: string;
};

export interface IPage {
  info : IInfo;
  results : Array<IPersonage>;
};

export interface IPersonageSchede {
  show: boolean;
  data: IPersonage | undefined;
  favouritePersonageList: IPersonage[];
  handleChange: (val:boolean) => void;
  handleFavourite: (val:IPersonage[]) => void;
};

export interface IModalPersonageSchede {
  show: boolean;
  data: IPersonage | undefined;
  favouritePersonageList: number[];
  handleChange: (val:boolean) => void;
  handleFavourite: (val:number[]) => void;
};

export interface IEpisodie {
  air_date: string;
  character: string[];
  created: string;
  episodie:string;
  id: number;
  name: string;
  url:string;
};

export interface IListCharger{
  loading:boolean
  personage:IPersonage[]
  currPage:number
  totalPage:number
  handleCurrentPage:(val:number) => void
  handleShowDetails:(val:boolean) => void
  handleSelectedPersonage:(val:IPersonage) => void
};

export interface IFavouriteId{
  favouritePersonagesId:number[]
  handleFavourite:(val:number[])=>void
};

export interface IFavourite{
  favouritePersonages:IPersonage[]
  handleFavourite:(val:IPersonage[])=>void
};

export interface ISearchInput {
  word:string,
  handleWord:(val:string) => void
};

export interface ISingelElemntProps{
  personage:IPersonage
  handleShow:(val:boolean)=>void
  handlePersonage:(val:IPersonage)=>void
}

export interface IPagination{
  currentPage:number
  handleCurrentPage:(val:number)=>void
  lastPage:number
}