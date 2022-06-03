import { useState } from "react"
import Business from "./Business";
import UpdateBusiness from "./UpdateBusiness";

const BusinessDetails = () => {
    const [isEditing, setIsEditing] = useState(false);

    const onEditEnd = () => (setIsEditing(false));

    const onEditStart = () => (setIsEditing(true));


    return (
        <>
        {isEditing && (
            <UpdateBusiness />
        )}
        <Business />
        </>
    )
}
