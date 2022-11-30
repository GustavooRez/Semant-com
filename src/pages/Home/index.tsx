import "./styles.css"
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import HomeCard from "../../components/HomeCard";

const Home = () => {
  const [worlds, setWorlds]: any = useState([]);
  const [completeRequisition, setcompleteRequisition]: any = useState(false);

  useEffect(() => {
    fetch("/data/worlds.json")
      .then(res => res.json()).then(res => {
        res.data.map((world: any) => {
          worlds.push(world);
        })
        setWorlds(worlds)
        setcompleteRequisition(true)
      });
  })
  return (
    completeRequisition ?
      <div id="background-home">
        <div className="text-center">
          <h1 className="display-1 fw-bold py-5">Seja bem-vindo!</h1>
        </div>

        <Container className="overflow-hidden">
            <div className="cards-home">
          {worlds.map((world: any , index: number) =>
          <HomeCard title={world.name} index={index} />
          )}
        </div>
        
        </Container>
      </div> : <></>
  );
};

export default Home;
