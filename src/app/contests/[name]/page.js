import guidelines from "/src/data/guidelines"


export default function ContestDetailsPage({ params }) {

    const formattedName = params.name.replace(/%20/g, ' ');

    const objectivesAndGuidelines = guidelines.find(obj => obj.name === formattedName);
    console.log(objectivesAndGuidelines)
    console.log("formatted name: ", formattedName)

    return (

        <div className="flex flex-col gap-4 w-full h-full">
            {objectivesAndGuidelines.objectives && objectivesAndGuidelines.objectives.length > 0 ? (
                <>
                    {objectivesAndGuidelines.objectives.map((objective, index) => (
                        <div key={index}>{objective}</div>
                    ))}
                </>
            ) :
                (
                    <div>No objectives</div>
                )
            }

            {
                objectivesAndGuidelines._guidelines && objectivesAndGuidelines._guidelines.length > 0 ? (
                    <>
                        {objectivesAndGuidelines._guidelines.map((guideline, index) => (
                            <div>


                                <div key={index}>{guideline}</div>
                                <ul>
                                    {objectivesAndGuidelines._guidelines ? (
                                        <>
                                            <>
                                                <li>{objectivesAndGuidelines._guidelines.link}</li>
                                                <li>{objectivesAndGuidelines._guidelines.name}</li>
                                            </>
                                        </>
                                    ) : (
                                        <p></p>
                                    )}
                                </ul>
                            </div>
                        ))}
                    </>
                ) : (
                    <p>No guidelines</p>
                )
            }
        </div>
    )
}

