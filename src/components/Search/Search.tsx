type SearchProps = {
    loadUser: (userName: string) => Promise<void>;

}

import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import styles from './Search.module.css';
const Search = ({ loadUser }: SearchProps) =>{
  const [userName, setUserName] = useState("");

  return(
    <div className={styles.search}>
    
    <h1>Pesquise um usuario</h1>

    <div>    
      
      <input type="text" placeholder="Digite o usuario" onChange={(e)=>setUserName(e.target.value)}/>
      <button onClick={()=>loadUser(userName)}><BsSearch/></button>

    </div>


    </div>



  );

}

export default Search;

