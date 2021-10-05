import axios from "axios";

const HOST = 'https://boiling-mesa-93887.herokuapp.com/'
export const getAllanimals = () => axios.get(`${HOST}/species/getAllAnimals`)

export const getMatchingCharities = (name: string) => axios.get(`${HOST}/species/${name}/getMatchingCharities`)