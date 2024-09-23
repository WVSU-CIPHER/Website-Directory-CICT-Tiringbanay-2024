import React from "react";

export default function PanakayonGuidelines() {
  const objective = `To create opportunities for students to showcase their leadership, problem-solving, and socialization skills, promoting sportsmanship, and fostering camaraderie among CICT students.`;

  const rules = [
    "The CICT Community will be grouped into thirteen (13) teams randomly, each with an assigned senior to spearhead that group.",
    "There will be fourteen (14) stations scattered across the WVSU Grounds.",
    "Each station will give the team five (5) minutes to comply and complete the challenge the station gives. This time frame does not include the instructions given at the start of the challenge.",
    "The team with the highest number of points at the end of the game wins.",
    "A map will be provided by the CICT Student Council.",
  ];

  const pointSystem = [
    "Easter Egg (30 pts.) - If the team has completed the task with remaining time, they’ll receive an Easter Egg card and get extra points.",
    "Diamond Key (20 pts.) - If the team has completed the task on time.",
    "Crystal Key (15 pts.) - If the team has almost completed the task.",
    "Jade Key (10 pts.) - If the team has completed the task at 50%.",
    "Copper Key (5 pts.) - If the team has not made any progress.",
    "Bonus Key (3 pts.) - If the team did not have a chance to come to a station after the whole duration of the game OR did not participate in a game.",
  ];

  const venues = [
    "Jubilee Park",
    "COM Gym",
    "Mini Forest",
    "Front of CICT Bldg",
  ];

  const activities = [
    {
      name: "I HEARD A RUMOR",
      objective:
        "Teams must pass the message with polvoron inside their mouth.",
      mechanics: [
        "Each team must select 6 players.",
        "There will be 5 words to pass.",
        "One player will relay the message, while others must put a polvoron (3-5 pieces) inside their mouth without eating or chewing it.",
        "Each player in line will repeat the same process.",
        "There will be a time limit of 5 minutes.",
      ],
      scoring: [
        "Easter Egg (30 pts) - Delivered the final message correctly.",
        "Diamond Key (20 pts) - The team got five (5) correct words.",
        "Crystal Key (15 pts) - The team got three (3) correct words.",
        "Jade Key (10 pts) - The team got two (2) correct words.",
        "Copper Key (5 pts) - The team got one (1) correct word.",
      ],
    },
    // Add other activities here in the same structure
  ];

  return (
    <div className="event-details">
      <h1>CICT Student Event</h1>
      <h2>Objective</h2>
      <p>{objective}</p>

      <h2>Rules and Guidelines</h2>
      <ul>
        {rules.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}
      </ul>

      <h2>Point System</h2>
      <ul>
        {pointSystem.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      <h2>Target Venues</h2>
      <ul>
        {venues.map((venue, index) => (
          <li key={index}>{venue}</li>
        ))}
      </ul>

      <h2>Activities</h2>
      {activities.map((activity, index) => (
        <div key={index} className="activity">
          <h3>{activity.name}</h3>
          <p>
            <strong>Objective:</strong> {activity.objective}
          </p>
          <h4>Mechanics</h4>
          <ul>
            {activity.mechanics.map((mechanic, index) => (
              <li key={index}>{mechanic}</li>
            ))}
          </ul>
          <h4>Scoring</h4>
          <ul>
            {activity.scoring.map((score, index) => (
              <li key={index}>{score}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
export default function PanakayonGuidelines() {
  return (
      <article className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">
              Objective
          </h1>

          <section className="mb-8">
              <div className="">
                  To create opportunities for students to showcase their leadership, problem-solving, and socialization skills, promoting sportsmanship, and fostering camaraderie among CICT students.
              </div>
              <h1 className="text-3xl font-bold my-6">
                  Rules and Guidelines
              </h1>
              <ul className="list-decimal pl-6 space-y-2">
                  <li>
                      The CICT Community will be grouped into thirteen (13) teams randomly,
                      each with an assigned senior to spearhead that group.
                  </li>
                  <li>
                      There will be fourteen (14) stations scattered across the WVSU Grounds.
                  </li>
                  <li>
                      Each station will give the team five (5) minutes to comply and complete the challenge the station gives. This time frame does not include the instructions given at the start of the challenge.
                  </li>
                  <li>
                       The team with the highest number of points at the end of the game wins.
                  </li>
                  <li>
                      A map will be provided by the CICT Student Council.
                  </li>
              </ul>
          </section>

          <section>
              <h2 className="text-2xl font-semibold mb-4">Point System</h2>
              <ol className="list-disc pl-6 space-y-2">
                  <li>
                  <strong>Easter Egg</strong> (30 pts.) - If the team has completed the task with remaining time,
                  they’ll receive an Easter Egg card and get extra points.
                  </li>
                  <li>
                      <strong>Diamond Key</strong> (20 pts.) - If the team has completed the task on time.
                      <div className="pl-10">Note: If the team completes the task with the remaining time but fails to complete the Easter Egg task, they will STILL have the Diamond Key points.</div>
                  </li>
                  <li>
                      <strong>Crystal Key</strong> (15 pts.) - If the team has almost completed the task.
                  </li>
                  <li>
                  <strong>Jade Key</strong> (10 pts.) - If the team has completed the task at 50%.
                  </li>
                  <li>
                      Copper Key (5 pts.) - If the team has not made any progress.
                  </li>
                  <li>
                      Bonus Key (3 pts.) If the team did not have a chance to come to a station after the whole duration of the game OR did not participate in a game.
                      <div className="pl-10"> Note: The points received by the team will vary by the condition needed to meet per station. This is only the general pointing system of each station.</div>
                  </li>
              </ol>
          </section>

          <h1 className="text-3xl font-bold my-6">Target Venues</h1>
          <ul className="list-disc pl-6 space-y-2">
              <li>Jubilee Park</li>
              <li>COM Gym</li>
              <li>Mini Forest</li>
              <li>Front of CICT Bldg</li>
          </ul>

          <h1 className="text-3xl font-bold my-6">Game Mechanics</h1>

          {/* Add each game section here */}
          <section>
              <h2 className="text-2xl font-semibold mb-4">1.) I HEARD A RUMOR</h2>
              <div><strong>Objective:</strong> Teams must pass the message with polvoron inside their mouth.</div>
              <div><strong>Venue:</strong> In front of CICT Bldg.</div>
              <h3 className="text-lg font-semibold my-2">Mechanics</h3>
              <ol className="list-decimal pl-6 space-y-2">
                  <li>Each team must select 6 players.</li>
                  <li>There will be 5 words to pass.</li>
                  <li>One player will relay the message while others must put a polvoron (3-5 pieces) inside their mouth without eating or chewing it.</li>
                  <li>Each player in line will repeat the same process: attempting to whisper the message to the next player with polvoron still in their mouth.</li>
                  <li>There will be a time limit of 5 minutes.</li>
              </ol>
              <h3 className="text-lg font-semibold my-2">Scoring</h3>
              <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Easter Egg</strong> (30 pts) - Delivered the final message correctly.</li>
                  <li><strong>Diamond Key</strong> (20 pts) - The team got five (5) correct words.</li>
                  <li><strong>Crystal Key</strong> (15 pts) - The team got three (3) correct words.</li>
                  <li><strong>Jade Key</strong> (10 pts) - The team got two (2) correct words.</li>
                  <li><strong>Copper Key</strong> (5 pts) - The team got one (1) correct word.</li>
              </ol>
          </section>

          <section>
              <h2 className="text-2xl font-semibold mt-4 mb-4">2.) CINEQUEST</h2>
              <div className="mb-2">
                  <strong>Objective:</strong> Study the pictures and try to guess their title.
              </div>
              <div className="mb-2">
                  <strong>Venue:</strong> In front of CICT Bldg.
              </div>
              <h3 className="text-lg font-semibold my-2">Mechanics</h3>
              <ol className="list-decimal pl-6 space-y-2">
                  <li>All members can guess one at a time.</li>
                  <li>Players must guess the movie's title based on the clues provided.</li>
                  <li>A player can pass a turn to the next person if they do not have an answer.</li>
                  <li>There will be a time limit of 5 minutes.</li>
              </ol>
              <h3 className="text-lg font-semibold my-2">Scoring</h3>
              <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Easter Egg</strong> (30 pts) - The team guessed 10 words + three (3) bonus rounds.</li>
                  <li><strong>Diamond Key</strong> (20 pts) - The team guessed 10 words.</li>
                  <li><strong>Crystal Key</strong> (15 pts) - The team guessed 7 words.</li>
                  <li><strong>Jade Key</strong> (10 pts) - The team guessed 5 words.</li>
                  <li><strong>Copper Key</strong> (5 pts) - The team guessed 3 words.</li>
              </ol>
          </section>

          <section>
              <h2 className="text-2xl font-semibold mb-4 mt-4">3.) TOWER OF CUP</h2>
              <div className="mb-2">
                  <strong>Objective:</strong> Safely remove the sheets of paper between the layers of the cup tower without causing the structure to collapse.
              </div>
              <div className="mb-2">
                  <strong>Venue:</strong> In front of CICT Bldg.
              </div>
              <h3 className="text-lg font-semibold my-2">Mechanics</h3>
              <ol className="list-decimal pl-6 space-y-2">
                  <li>Each team must select 10 players.</li>
                  <li>Only one sheet of paper can be removed per turn.</li>
                  <li>If a player touches the cups or the paper while removing paper, it is considered a mistake, and their turn ends.</li>
                  <li>If the tower collapses while a player is removing paper, they must restore the whole layer.</li>
              </ol>
              <h3 className="text-lg font-semibold my-2">Scoring</h3>
              <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Easter Egg</strong> (30 pts) - The team formed a 7-layer tower of cups with paper sheets and successfully removed the papers.</li>
                  <li><strong>Diamond Key</strong> (20 pts) - The team successfully removed all 9 papers.</li>
                  <li><strong>Crystal Key</strong> (15 pts) - The team successfully removed at least 7 papers.</li>
                  <li><strong>Jade Key</strong> (10 pts) - The team successfully removed at least 5 papers.</li>
                  <li><strong>Copper Key</strong> (5 pts) - The team successfully removed at least 3 papers.</li>
              </ol>
          </section>

          <section>
              <h2 className="text-2xl font-semibold mb-4">BLOW THE PONG</h2>
              <div className="mb-2">
                  <strong>Objective:</strong> Teams must blow several ping pong balls to transfer them from the starting cup to the final cup.
              </div>
              <div className="mb-2">
                  <strong>Venue:</strong> In front of CICT Bldg.
              </div>
              <h3 className="text-lg font-semibold my-2">Mechanics</h3>
              <ol className="list-decimal pl-6 space-y-2">
                  <li>Each team must select 10 players.</li>
                  <li>Players can only have 1 turn to blow the ping pong ball from one cup to the next.</li>
                  <li>If the ball falls out of the cup, the player must return the ball to the previous cup and another player will take turns until they reach the last cup.</li>
                  <li>There will be a time limit of 5 minutes.</li>
              </ol>
              <h3 className="text-lg font-semibold my-2">Scoring</h3>
              <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Easter Egg</strong> (30 pts) - The team transferred the ping pong ball to an additional five (5) cups.</li>
                  <li><strong>Diamond Key</strong> (20 pts) - The team transferred the ping pong ball to the 10th cup.</li>
                  <li><strong>Crystal Key</strong> (15 pts) - The team transferred the ping pong ball to the 7th cup.</li>
                  <li><strong>Jade Key</strong> (10 pts) - The team transferred the ping pong ball to the 5th cup.</li>
                  <li><strong>Copper Key</strong> (5 pts) - The team transferred the ping pong ball to the 3rd cup.</li>
              </ol>
          </section>

          <section>
              <h2 className="text-2xl font-semibold mb-4">ANORAK’S HOOP RELAY</h2>
              <div className="mb-2">
                  <strong>Objective:</strong> Pass the hula hoop through the players' bodies.
              </div>
              <div className="mb-2">
                  <strong>Venue:</strong> In front of CICT Bldg.
              </div>
              <h3 className="text-lg font-semibold my-2">Mechanics</h3>
              <ol className="list-decimal pl-6 space-y-2">
                  <li>Each team consists of 30 players.</li>
                  <li>Players must form a line by holding hands and must not be broken.</li>
                  <li>Players must pass the hula hoop through their bodies without holding it and letting others move through the hoop.</li>
                  <li>There will be a time limit of 5 minutes.</li>
              </ol>
              <h3 className="text-lg font-semibold my-2">Scoring</h3>
              <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Easter Egg</strong> (30 pts) - Hoop must return to the first person.</li>
                  <li><strong>Diamond Key</strong> (20 pts) - Hoop reached the last person.</li>
                  <li><strong>Crystal Key</strong> (15 pts) - Hoop stopped between 25-30 players.</li>
                  <li><strong>Jade Key</strong> (10 pts) - Hoop stopped between 20-25 players.</li>
                  <li><strong>Copper Key</strong> (5 pts) - Hoop stopped in less than 20 players.</li>
              </ol>
          </section>

          <section>
              <h2 className="text-2xl font-semibold mb-4">UNITY CUP</h2>
              <div className="mb-2">
                  <strong>Objective:</strong> Teams must transport a cup filled with water using a rope tied around it without spilling the contents.
              </div>
              <div className="mb-2">
                  <strong>Venue:</strong> Med Gym
              </div>
              <h3 className="text-lg font-semibold my-2">Materials Needed:</h3>
              <ul className="list-disc pl-6 space-y-2">
                  <li>Plastic Cups</li>
                  <li>Marker</li>
                  <li>Yarn</li>
              </ul>
              <h3 className="text-lg font-semibold my-2">Mechanics</h3>
              <ol className="list-decimal pl-6 space-y-2">
                  <li>Each team must select 10 players.</li>
                  <li>The cup will be marked to determine the water level.</li>
                  <li>Players must strategize to balance the cups from one place to another without spilling much water.</li>
                  <li>There will be a time limit of 5 minutes.</li>
              </ol>
              <h3 className="text-lg font-semibold my-2">Scoring</h3>
              <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Easter Egg</strong> (30 pts) - The team transferred the cup without spillage back to the starting point.</li>
                  <li><strong>Diamond Key</strong> (20 pts) - The team transferred the cup without spillage to the finish line.</li>
                  <li><strong>Crystal Key</strong> (15 pts) - The team transferred the cup without spillage from the second line mark.</li>
                  <li><strong>Jade Key</strong> (10 pts) - The team transferred the cup without spillage from the third line mark.</li>
                  <li><strong>Copper Key</strong> (5 pts) - The team transferred the cup without spillage from the fourth line mark.</li>
              </ol>
          </section>

          <section>
              <h2 className="text-2xl font-semibold mb-4">MONOBLOCK ARRAY</h2>
              <div className="mb-2">
                  <strong>Objective:</strong> Move down a line using monoblock chairs, to advance as far as possible within a set time limit.
              </div>
              <div className="mb-2">
                  <strong>Venue:</strong> Med Gym
              </div>
              <h3 className="text-lg font-semibold my-2">Mechanics</h3>
              <ol className="list-decimal pl-6 space-y-2">
                  <li>Each team must select six (6) players.</li>
                  <li>The first player will sit on a chair and the next person will be passing a chair.</li>
                  <li>Each player must sit down fully on the chair before moving or passing it to the next person.</li>
                  <li>Players can only pass the chair to the player directly behind them; throwing or dragging the chair is not allowed.</li>
                  <li>If any player stands up before sitting properly on the chair or if they deviate from the line, they must repeat from the start.</li>
                  <li>There will be a time limit of 5 minutes.</li>
              </ol>
              <h3 className="text-lg font-semibold my-2">Scoring</h3>
              <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Easter Egg</strong> (30 pts) - The team successfully returned to the starting line.</li>
                  <li><strong>Diamond Key</strong> (20 pts) - The team reached the fourth line.</li>
                  <li><strong>Crystal Key</strong> (15 pts) - The team reached the third line.</li>
                  <li><strong>Jade Key</strong> (10 pts) - The team reached the second line.</li>
                  <li><strong>Copper Key</strong> (5 pts) - The team reached the first line.</li>
              </ol>
          </section>

          <section>
              <h2 className="text-2xl font-semibold mb-4">BRAIN TELEPATHY</h2>
              <div className="mb-2">
                  <strong>Objective:</strong> Teams must guess the object drawn by their teammates.
              </div>
              <div className="mb-2">
                  <strong>Venue:</strong> Med Gym
              </div>
              <h3 className="text-lg font-semibold my-2">Mechanics</h3>
              <ol className="list-decimal pl-6 space-y-2">
                  <li>Each team must select ten (10) players.</li>
                  <li>The players must form a horizontal line where they are alternately facing to the front and to the back.</li>
                  <li>One player will begin counting by calling out “1” and then a different player must continue by calling out “2,” and so on.</li>
                  <li>The order of the players calling out the numbers must not form a pattern.</li>
                  <li>If multiple players call out the same number, they must start over from “1.”</li>
                  <li>If no number is called out after 15 seconds, they must start over from “1.”</li>
                  <li>Each team will be given 30 seconds to plan out their strategies.</li>
                  <li>There will be a time limit of 5 minutes.</li>
              </ol>
              <h3 className="text-lg font-semibold my-2">Scoring</h3>
              <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Easter Egg</strong> (30 pts) - The team counted to at least “30.”</li>
                  <li><strong>Diamond Key</strong> (20 pts) - The team counted to at least “20.”</li>
                  <li><strong>Crystal Key</strong> (15 pts) - The team counted to at least “15.”</li>
                  <li><strong>Jade Key</strong> (10 pts) - The team counted to at least “10.”</li>
                  <li><strong>Copper Key</strong> (5 pts) - The team counted to at least “5.”</li>
              </ol>
          </section>

          <section>
              <h2 className="text-2xl font-semibold mb-4">AVATAR MIX AND MATCH</h2>
              <div className="mb-2">
                  <strong>Objective:</strong> Players must match the characters Perzival, Artemis, Shoto, Daito, and Aech to their corresponding traits within a time limit to score points.
              </div>
              <div className="mb-2">
                  <strong>Venue:</strong> Mini Forest Shed
              </div>
              <h3 className="text-lg font-semibold my-2">Mechanics</h3>
              <ol className="list-decimal pl-6 space-y-2">
                  <li>Each team selects 5 players to participate.</li>
                  <li>Players are given avatar cards featuring the characters Perzival, Artemis, Shoto, Daito, and Aech.</li>
                  <li>Players must match each avatar card to their duplicate.</li>
                  <li>Each player takes turns placing one card on the board. If a card is placed on the wrong match, the player is out of the round and the next player from the team takes their turn.</li>
                  <li>There will be a time limit of 5 minutes.</li>
              </ol>
              <h3 className="text-lg font-semibold my-2">Scoring</h3>
              <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Easter Egg</strong> (30 pts) - The team must sort the (5) actors into their avatars.</li>
                  <li><strong>Diamond Key</strong> (20 pts) - The team sorted thirty (30) avatars into their match.</li>
                  <li><strong>Crystal Key</strong> (15 pts) - The team sorted thirty (25) avatars into their match.</li>
                  <li><strong>Jade Key</strong> (10 pts) - The team sorted thirty (20) avatars into their match.</li>
                  <li><strong>Copper Key</strong> (5 pts) - The team sorted thirty (15) avatars into their match.</li>
              </ol>
          </section>

          <section>
              <h2 className="text-2xl font-semibold mb-4">FIX-IT!</h2>
              <div className="mb-2">
                  <strong>Objective:</strong> Teams must identify and correct errors in given code snippets.
              </div>
              <div className="mb-2">
                  <strong>Venue:</strong> Mini Forest Shed
              </div>
              <h3 className="text-lg font-semibold my-2">Mechanics</h3>
              <ol className="list-decimal pl-6 space-y-2">
                  <li>All members can guess one at a time.</li>
                  <li>Players must fix the code as fast as they can.</li>
                  <li>A player can pass a turn to the next person if they cannot guess.</li>
                  <li>There will be a time limit of 5 minutes.</li>
              </ol>
              <h3 className="text-lg font-semibold my-2">Scoring</h3>
              <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Easter Egg</strong> (30 pts) - The team must guess the output of the given code snippet.</li>
                  <li><strong>Diamond Key</strong> (20 pts) - The team got five (5) correct guesses.</li>
                  <li><strong>Crystal Key</strong> (15 pts) - The team got three (3) correct guesses.</li>
                  <li><strong>Jade Key</strong> (10 pts) - The team got two (2) correct guesses.</li>
                  <li><strong>Copper Key</strong> (5 pts) - The team got one (1) correct guess.</li>
              </ol>
          </section>

          <section>
              <h2 className="text-2xl font-semibold mb-4">DETECTIVE CALEB</h2>
              <div className="mb-2">
                  <strong>Objective:</strong> Teams must identify the differences between two identical images.
              </div>
              <div className="mb-2">
                  <strong>Venue:</strong> Mini Forest Shed
              </div>
              <h3 className="text-lg font-semibold my-2">Materials Needed:</h3>
              <ul className="list-disc pl-6 space-y-2">
                  <li>Printed Images</li>
                  <li>Marker</li>
              </ul>
              <h3 className="text-lg font-semibold my-2">Mechanics</h3>
              <ol className="list-decimal pl-6 space-y-2">
                  <li>All members can guess one at a time.</li>
                  <li>Players must spot as many differences as they can.</li>
                  <li>A player can pass a turn to the next person if they cannot spot a difference.</li>
                  <li>There will be a time limit of 5 minutes.</li>
              </ol>
              <h3 className="text-lg font-semibold my-2">Scoring</h3>
              <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Easter Egg</strong> (30 pts) - The team spotted a hidden Caleb from the image.</li>
                  <li><strong>Diamond Key</strong> (20 pts) - The team spotted twenty (20) differences.</li>
                  <li><strong>Crystal Key</strong> (15 pts) - The team spotted fifteen (15) differences.</li>
                  <li><strong>Jade Key</strong> (10 pts) - The team spotted ten (10) differences.</li>
                  <li><strong>Copper Key</strong> (5 pts) - The team spotted five (5) differences.</li>
              </ol>
          </section>

          <section>
              <h2 className="text-2xl font-semibold mb-4">HUMAN WHEEL</h2>
              <div className="mb-2">
                  <strong>Objective:</strong> Teams will compete in a fun and challenging race using a human-sized paper wheel. The objective is to navigate from the starting line to the finish line without damaging the paper wheel.
              </div>
              <div className="mb-2">
                  <strong>Venue:</strong> Jubilee Park
              </div>
              <h3 className="text-lg font-semibold my-2">Mechanics</h3>
              <ol className="list-decimal pl-6 space-y-2">
                  <li>Each team consists of 2 groups with 4 players each (8 players total).</li>
                  <li>Each pair will take turns racing with the paper wheel.</li>
                  <li>Each pair will enter the human-sized paper wheel together.</li>
                  <li>Upon the signal to start, pairs must work together to move forward, using synchronized steps to maintain the balance and integrity of the wheel.</li>
                  <li>Teams may strategize their movements but must ensure that they do not exceed a specified speed limit to minimize the risk of tearing.</li>
                  <li>If the paper wheel is torn or ripped at any point during the race, the entire team must return to the starting line and begin again.</li>
                  <li>There will be a time limit of 5 minutes.</li>
              </ol>
              <h3 className="text-lg font-semibold my-2">Scoring</h3>
              <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Easter Egg</strong> (30 pts) - Both (2) groups finished the race twice.</li>
                  <li><strong>Diamond Key</strong> (20 pts) - Both (2) groups finished the race with at least one minute left.</li>
                  <li><strong>Crystal Key</strong> (15 pts) - Both (2) groups finished the race.</li>
                  <li><strong>Jade Key</strong> (10 pts) - One (1) group finished the race.</li>
                  <li><strong>Copper Key</strong> (5 pts) - None of the groups finished the race.</li>
              </ol>
          </section>

          <section>
              <h2 className="text-2xl font-semibold mb-4">3-LEGGED RACE</h2>
              <div className="mb-2">
                  <strong>Objective:</strong> Teams of two compete in a relay-style race where each partner must tie their inner legs and work together to reach the finish line.
              </div>
              <div className="mb-2">
                  <strong>Venue:</strong> Jubilee Park
              </div>
              <h3 className="text-lg font-semibold my-2">Mechanics</h3>
              <ol className="list-decimal pl-6 space-y-2">
                  <li>Each team must select 10 players, divided into 5 pairs.</li>
                  <li>Each player ties one leg to their partner’s using the ribbon provided.</li>
                  <li>The pairs must remain connected at all times and reach the goal.</li>
                  <li>There will be a time limit of 5 minutes.</li>
              </ol>
              <h3 className="text-lg font-semibold my-2">Scoring</h3>
              <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Easter Egg</strong> (30 pts) - All five (5) pairs reached the goal and succeeded in a single-round three-way race.</li>
                  <li><strong>Diamond Key</strong> (20 pts) - All five (5) pairs reached the goal.</li>
                  <li><strong>Crystal Key</strong> (15 pts) - Three (3) pairs reached the goal.</li>
                  <li><strong>Jade Key</strong> (10 pts) - Two (2) pairs reached the goal.</li>
                  <li><strong>Copper Key</strong> (5 pts) - Only one (1) pair reached the goal.</li>
              </ol>
          </section>

          <section>
              <h2 className="text-2xl font-semibold mb-4">JUMP JUMP GO</h2>
              <div className="mb-2">
                  <strong>Objective:</strong> The team must complete the most jumps without tripping within the time limit.
              </div>
              <div className="mb-2">
                  <strong>Venue:</strong> Jubilee Park
              </div>
              <h3 className="text-lg font-semibold my-2">Mechanics</h3>
              <ol className="list-decimal pl-6 space-y-2">
                  <li>Each team will have 10 participants; 2 people will hold the rope.</li>
                  <li>There will be a time limit of 5 minutes.</li>
                  <li>Scoring begins as the first player starts jumping within the rope.</li>
                  <li>Other members should join one at a time.</li>
                  <li>The game continues until all members are jumping in the rope.</li>
                  <li>The commander can strategize and substitute the member holding the rope with someone who will jump.</li>
                  <li>The highest number of people jumping within the rope will determine the points they achieve.</li>
              </ol>
              <h3 className="text-lg font-semibold my-2">Scoring</h3>
              <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Easter Egg</strong> (30 pts) - The team successfully achieved five (5) continuous jumps while having five (5) members jumping.</li>
                  <li><strong>Diamond Key</strong> (20 pts) - The team managed to get five (5) members jumping in the rope.</li>
                  <li><strong>Crystal Key</strong> (15 pts) - The team managed to get three (3) members jumping in the rope.</li>
                  <li><strong>Jade Key</strong> (10 pts) - The team managed to get two (2) members jumping in the rope.</li>
                  <li><strong>Copper Key</strong> (5 pts) - The team managed to get one (1) member jumping in the rope.</li>
              </ol>
          </section>
      </article>
  );
};