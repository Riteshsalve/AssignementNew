import React, { useEffect, useState } from "react";
import { useSearchParams, useParams,Link } from "react-router-dom";
import axios from "axios";
function DetailsComponent() {
  const { id } = useParams();
  const [veiw, setView] = useState([]);
  const [data, setData] = useState({});
  console.log(id);


  const MianFunction= async()=>{
   await axios
    .get(`https://api.thecatapi.com/v1/breeds?limit=10&page=0`)
    .then((res) => {
      setView(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }


  const Finds = async() => {
    const result =  veiw.find((el) => el.id == id);
    setData(result);
    console.log(result);
  };

  useEffect( () => {
        MianFunction()
    Finds();
  }, []);
  console.log(data?.cfa_url);

  return (
    <div style={{width:"50%",margin:"auto",marginTop:"50px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",gap:"10px"}}>
      <div>
        <img src={data?.cfa_url} alt="catimage" />
      </div>
      <div>
        <h2>Name:{data?.name}</h2>
        <h2>Origin:{data?.origin}</h2>
        <h2>Weight(in Metric):{data?.weight?.metric}</h2>
        <h3>Hairless:{data?.hairless}</h3>
        <Link to={`${data?.wikipedia_url}`}>
        <button style={{color:"blue"}}>
            Wikipedia
            </button>
            </Link>
       
      </div>
    </div>
  );
}

export default DetailsComponent;
