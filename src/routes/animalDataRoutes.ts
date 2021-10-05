import axios from "axios";

const HOST = process.env.HOST
console.log(HOST, 'hosty');
export const getAllanimals = () => axios.get(`${HOST}/species/getAllAnimals`)

export const getMatchingCharities = (name: string) => axios.get(`${HOST}/species/${name}/getMatchingCharities`)