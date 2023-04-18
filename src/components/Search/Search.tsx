type SearchProps = {
    loadUser: (userName: string) => Promise<void>;

}

import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const Search = ({ loadUser }: SearchProps) =>{
  const [userName, setUserName] = useState("");

  return(
    <>
    
    <h1>Pesquise um usuario</h1>
    <input type="text" placeholder="Digite o usuario" onChange={(e)=>setUserName(e.target.value)}/>
    <button onClick={()=>loadUser(userName)}><BsSearch/></button>



    </>



  );

}

export default Search;

