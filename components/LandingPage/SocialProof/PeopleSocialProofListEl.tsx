type Props = {
    imageSource: string
}
export default function PeopleSocialProofListEl({ imageSource }: Props){
    return (
        <li>
            <img src={ imageSource } alt="image of person who rated it"/>
        </li>
    )
}