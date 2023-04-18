import Search from "../components/Search/Search";
import { useState } from 'react';
import { UserProps } from "../types/user";
const Home = () =>{
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (userName: string) =>{
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    console.log(data);

  }

  
    return(
    
    <>
      <h1>Home</h1>
      <Search loadUser={loadUser}/>
    
    </>
    
    );


}

export default Home;

