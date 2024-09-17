import Header from "../../components/Header"
import { chopsic } from "../../layout"
import groupData from "/src/data/groups"

export default function GroupDetails({ params }) {

    const group = groupData.find(group => group.name === params.groupID);
    console.log(group)

    return (
        <>
            <Header font={chopsic.variable} />

            <div className="md:mt-40">
                Group Details {group.name} <br />
                Key {group.key} <br /> <br />
                Title: {group.title} <br />
                Group Description: <br /> {group.description}



            </div >
        </>
    )
}