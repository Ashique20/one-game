import MatchesTable from "./MatchesTable";

const MatchTab = ({gameName}) => {
    return (
        <div>
             {
            gameName.map(game=><MatchesTable game={game}></MatchesTable>)
          }
        </div>
    );
};

export default MatchTab;