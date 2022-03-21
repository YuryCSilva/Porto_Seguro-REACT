import { useEffect } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import API from "../services/API";
import { useData } from "../hooks/userData";

export function Home() {
  const {HandleChangeData} = useData()

  useEffect(() => {
    async function getData(){
      let data = await API.get('').then((response)=>{ return response.data});
      HandleChangeData(data);
    }
    getData()
  }, []);

  console.log()

  return (
    <>
      <Header />
      <Main />
    </>
  );
}
