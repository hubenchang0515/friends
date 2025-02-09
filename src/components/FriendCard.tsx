import Card from "./Card";

export interface FriendCardProps {
    title: string;
    icon: string;
    url: string;

    id?:string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

export default function FriendCard(props:FriendCardProps) {
    return (
        <Card id={props.id} style={props.style}>
            <div style={{display:'flex', alignItems:'center', gap:16, height: 64}}>
                <img src={props.icon} width={64} height={64}/>
                <div style={{display:'flex', flexDirection:'column', flexGrow: 1, flexShrink: 1, height:64, justifyContent:'space-between',overflow:'hidden'}}>
                    <p style={{margin:0, padding:0, whiteSpace:'nowrap', textOverflow:'ellipsis', overflow:'hidden'}} title={props.title}>{props.title}</p>
                    <a href={props.url} style={{color:'#64ffda', textAlign:'right'}}>传送</a>
                </div>
            </div>
        </Card>
    )
}