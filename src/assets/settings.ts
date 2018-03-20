export interface Settings {
  id: number;
  name: string;
  status: boolean;
  description: string;
}

export const SETTINGS_DATA: Settings[] = [
  {id: 1, name: 'Hydrogen', status: true, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
  {id: 2, name: 'Helium', status: true, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
  {id: 3, name: 'Lithium', status: false, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
  {id: 4, name: 'Beryllium', status: false, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
  {id: 5, name: 'Boron', status: false, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'}
];