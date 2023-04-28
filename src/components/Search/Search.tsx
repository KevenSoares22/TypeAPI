type SearchProps = {
    loadUser: (userName: string) => Promise<void>;

}
import { KeyboardEvent } from 'react';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import styles from './Search.module.css';
const Search = ({ loadUser }: SearchProps) =>{
  const [userName, setUserName] = useState("");
  const handleKeyDown = (e: KeyboardEvent) =>{
    if (e.key === "Enter") {
      loadUser(userName);
    }
  


  };
  return(
    <div className={styles.search}>
    
    <h1>Insira o usuario</h1>

    <div>    
      
      <input type="text" placeholder="Digite o usuario" onKeyDown={handleKeyDown} onChange={(e)=>setUserName(e.target.value)}/>
      <button onClick={()=>loadUser(userName)}><BsSearch/></button>

    </div>


    </div>



  );

}

export default Search;

