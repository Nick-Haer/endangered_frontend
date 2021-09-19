import axios from "axios";


export const getAllanimals = () => axios.get('/species/getAllAnimals')

export const getMatchingCharities = (name: string) => axios.get(`/species/${name}/getMatchingCharities`)