export interface ITileDetails {
    name: string;
    url: string;
}



export const MOCK_HOME_NAV_LIST : ITileDetails[] =[
    {name: 'Patient Enrollment & Verification' , url: '/patients'},
    {name: 'Ordering' , url: '/ordering'},
    {name: 'Other' , url: '/other'},

];