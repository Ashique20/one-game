import { useNavigate, useParams } from "react-router-dom";
import "react-tabs/style/react-tabs.css";

const MatchesTable = ({ game }) => {
    const navigate= useNavigate()
    
    
  return (
    <div>
      <div className="overflow-x-auto mt-8 mr-60 ml-60">
        <table className="table h-32 flex justify-center   bg-[#191919]">
          <tbody>
            <tr className="text-yellow-400">
             {
                game.teams ? <th className="flex items-center gap-4 justify-center text-4xl font-bold">
                {game?.teams[0]}{" "}
                <img className="w-20"
                  src="https://www.pngmart.com/files/11/Versus-PNG-Transparent.png"
                  alt=""
                />{" "}
                {game?.teams[1]}{" "}
              </th>:<th></th>
             }
              <td className="font-bold text-3xl">{game.league}</td>
              <td>Quality Control Specialist</td>
              <td onClick={()=>navigate(`/watch/${game._id}`)} className="w-24 cursor-pointer"><img  src="https://www.freepnglogos.com/uploads/play-button-png/index-media-cover-art-play-button-overlay-5.png" alt="" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MatchesTable;
