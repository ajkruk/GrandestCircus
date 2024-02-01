import { useState } from "react";
import "./Votes.css"

function Votes() {
        const [votes, setVotes] = useState<{ [key: string]: number }>({
          Chocolate: 0,
          Vanilla: 0,
          Strawberry: 0,
        });

        const flavorColors = {
            Chocolate: 'brown',
            Vanilla: 'beige',
            Strawberry: 'pink'
        };

        const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);
        const addVote = (flavor: string) => {
          setVotes((prevVotes) => ({
            ...prevVotes,
            [flavor]: prevVotes[flavor] + 1
          }));
        };
        return (
          <div className="Votes">
              <p>Vote Here</p>
            {Object.entries(votes).map(([flavor, count]) => (
              <div key={flavor} className="vote-item">
                <button onClick={() => addVote(flavor)}>{flavor}</button>
                {count > 0 && (
                  <div>
                    {flavor}: {count} ({((count / totalVotes) * 100).toFixed(1)}%)
                    <div className="graph-bar" style={{ width: `${(count / totalVotes) * 100}%`, backgroundColor: flavorColors[flavor]}} />
                  </div>
                )}
              </div>
            ))}
            {totalVotes === 0 && <div>No votes yet.</div>}
          </div>
        );
      };

   

export default Votes;