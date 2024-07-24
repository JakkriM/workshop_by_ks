export interface INavList {
  path: string;
  title: string;
  subList?: INavList[];
}
