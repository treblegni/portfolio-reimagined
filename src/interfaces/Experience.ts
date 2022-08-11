 //Schema
/*
- Preview image of company
- name of company
- title
- start date and end date
- responsibilites
*/
export default interface Experience {
    id: Number,
    companyName: string,
    title: string,
    previewImage: string,
    startDate: string,
    endDate: string,
    responsibilities: string
}