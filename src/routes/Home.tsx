import Search from "../components/Search/Search";
import { useState } from 'react';
import { UserProps } from "../types/user";
import styles from "./Home.module.css";



const Home = () =>{
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (userName: string) =>{
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    const { avatar_url, login, location, followers, following } = data



    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following

    };
    setUser(userData);
  }

  
    return(
    
    <div>
      <h1 className={styles.titleElement}>Pesquise no GitHub</h1>
      <Search loadUser={loadUser}/>
      {user && user.login}
    </div>
    
    );


}

export default Home;

