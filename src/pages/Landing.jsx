import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import CocktailList from '../components/CocktailList';
const cocktailSearchUrl = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

export const loader = async () => {
  const searchTerm = 'margarita';
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  console.log(response)
  return { drinks: response.data.drinks, searchTerm};

}

export default function Landing() {
   const {drinks, searchTerm } = useLoaderData();
  return (
    <>
      <CocktailList/>
    </>
  )
}
