import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import Results from '../Components/Results'
import Requests from '../utils/Requests'







export default function Home({results}) {
  console.log(results);
  
  return (
    <div>
      <head>
        <title>HULU.02</title>
        <link rel='icon' href=''></link>
      </head>

      <div >
        {/* header */}
        <Header/>
        {/* nav abr */}
       <Nav />
      </div>
      
      <div >  
        <Results results = {results}/> 
      </div>      
    </div>
  )
}


export async function getServerSideProps (context){
  
  const gen = context.query.genre
  const url_01 = "https://api.themoviedb.org/3/movie/550?api_key=1e7430d8510930d6a10f67bcab5ba386"
  const request = await fetch (`https://api.themoviedb.org/3${
    Requests[gen]?.url || Requests.fetchTrending.url}`)
  const data = await request.json()

  

    return {
      props:{
        results: data

      }
    }



}
