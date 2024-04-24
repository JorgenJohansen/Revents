
import { Segment, Header, Comment} from "semantic-ui-react";
import ChatForm from "./ChatForm";

type Props = {
    eventId: string
}

export default function EventDetailedChat({eventId}: Props) {
  return (
    <>
<Segment
    textAlign="center"
    attached="top"
    inverted
    color="teal"
    style={{border: 'none'}}
>
    <Header>Chat about this event</Header>
</Segment>

<Segment attached>
    <Comment.Group>
        <Comment>
            <Comment.Avatar src="/user.png"/>
            <Comment.Content>
                <Comment.Author as="a">Matt</Comment.Author>
                <Comment.Metadata>
                    <div>Today at 5:42PM</div>
                </Comment.Metadata>
                <Comment.Text>How artistic!</Comment.Text>
                <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
            </Comment.Content>
        </Comment>
    </Comment.Group>
    <ChatForm  eventId={eventId}/>
</Segment>
</>

  )
}