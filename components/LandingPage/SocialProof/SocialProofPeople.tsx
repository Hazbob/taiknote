import PeopleSocialProofListEl from "./PeopleSocialProofListEl";

export default function SocialProofPeople(){
    const peopleUrls = [""]
    return (
        <ul>
            {peopleUrls.map(url => {
                return (
                    <PeopleSocialProofListEl
                        key={url}
                        imageSource={url}
                    />
                )
            })}
        </ul>
    )
}