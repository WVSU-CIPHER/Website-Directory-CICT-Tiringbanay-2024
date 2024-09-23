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
