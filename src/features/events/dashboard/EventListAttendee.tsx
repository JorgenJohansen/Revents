import { Image, List } from "semantic-ui-react";
import { Attendee } from "../../../app/types/event";
import { Link } from "react-router-dom";

type Props = {
  attendee: Attendee
}

export default function EventListAttendee({attendee}: Props) {
  return (
    <List.Item as={Link} to={`/profiles/${attendee.id}`}>
        <Image ui={true} size="mini" circular src={attendee.photoURL} />
    </List.Item>
  )
}