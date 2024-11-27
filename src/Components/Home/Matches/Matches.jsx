import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MatchTab from "./MatchTab";

const Matches = () => {
  const [matches, setMatches] = useState([]);
  

  useEffect(() => {
    fetch(`http://localhost:5000/matches`)
      .then((res) => res.json())
      .then((data) => setMatches(data));
  }, []);

  const filterCsGo = matches.filter((match) => match.game === "CS_GO");
  const filterValorant =   matches.filter((match) => match.game === "Valorant");
  const filterApex =   matches.filter((match) => match.game === "Apex_Legends");
  const filterLeague_of_Legends =   matches.filter((match) => match.game === "League_of_Legends");
  const FilterFortnite =   matches.filter((match) => match.game === "Fortnite");

//   style={{
//     backgroundImage: "url(https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/KQGCJLI46NA5VBSPYWAJ2SSPYM.jpg&w=1440)",
//   }}
  return (
    <div className="bg-black " >
      <Tabs>
        <TabList className="flex pt-40   w-[60%] ml-[20%] justify-center items-center gap-20 border-b-2 ">
          <Tab className="w-40  cursor-pointer" ><img  src="https://c4.wallpaperflare.com/wallpaper/917/741/78/letters-background-the-game-characters-wallpaper-preview.jpg" alt="" /></Tab>
          <Tab className="w-32 cursor-pointer"><img  src="https://i.pinimg.com/736x/cf/ae/88/cfae886e263126f685510e2f45b82970.jpg" alt="" /></Tab>
          <Tab className="w-32 cursor-pointer"><img  src="https://i.pinimg.com/originals/67/00/88/670088805b1d215a939890631ad7a1ce.jpg" alt="" /></Tab>
          <Tab className="w-36 cursor-pointer"><img src="https://cdn-images.threadless.com/threadless-media/artist_shops/shops/Midgets/products/581100/shirt-1527287626-e3674d84cdc64d468bf41b02101445ee.png?v=3&d=eyJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMDAwMDAwIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV0sICJmb3JjZSI6IGZhbHNlLCAib25seV9tZXRhIjogZmFsc2V9" alt="" /></Tab>
          <Tab className="w-60 cursor-pointer"><img src="https://cdn.dribbble.com/users/1268263/screenshots/2918166/casparnonner_lolchampionship_logo_1a.png" alt="" /></Tab>
        </TabList>

        <TabPanel>
          <MatchTab gameName={filterCsGo}></MatchTab>
        </TabPanel>
        <TabPanel>
        <MatchTab gameName={filterValorant}></MatchTab>
        </TabPanel>
        <TabPanel>
        <MatchTab gameName={filterApex}></MatchTab>
        </TabPanel>
        <TabPanel>
        <MatchTab gameName={FilterFortnite}></MatchTab>
        </TabPanel>
        <TabPanel>
        <MatchTab gameName={filterLeague_of_Legends}></MatchTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Matches;
