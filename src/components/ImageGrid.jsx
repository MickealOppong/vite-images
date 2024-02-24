import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useAppContext } from './AppContextProvider';

const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}&query`

const ImageGrid = () => {
  const { searchCriteria } = useAppContext();

  const response = useQuery({
    queryKey: ['images', searchCriteria],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchCriteria}`);

      return result.data;
    }
  })

  if (response.isLoading) {
    return <section className='image-container'>
      <h1>Loading...</h1>
    </section>
  }
  if (response.isError) {
    return <section className='image-container'>
      <h1>Error, something bad happened</h1>
    </section>
  }
  const data = response?.data?.results;

  if (data.length === 0) {
    return <section className='image-container'>
      <h1>no result found</h1>
    </section>
  }
  return <section className='image-container'>

    <article className='item'>
      {
        data.map((image) => {
          const { id, urls } = image;
          return <img src={urls.full} className='image' key={id} />
        })
      }
    </article>

  </section>
}


export default ImageGrid;