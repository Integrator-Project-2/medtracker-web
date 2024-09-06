import { Card, Flex, Radio, Text } from "@radix-ui/themes";
import { UserAvatarIcon } from "../UserAvatarIcon";
import { CardContainer, UserCardText } from "./user-card";
import { useState } from "react";
import { Patient } from "@/@types/Data/Patient";

interface UserCardProps {
    patient: Patient;
}

export function UserCard({ patient }: UserCardProps) {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const handleCardClick = () => {
        setSelectedValue(patient.id.toString());
    };

    return (
        <CardContainer onClick={handleCardClick}>
            <Flex justify="between" align="center">
                <UserAvatarIcon />
                <UserCardText>
                    {patient.user.name}
                </UserCardText>   

                <UserCardText>
                    {patient.cpf}
                </UserCardText> 

                <UserCardText>
                    {patient.user.birth_date} {/* Formate conforme necessário */}
                </UserCardText>

                <Radio
                    name="example"
                    value={patient.id.toString()}
                    checked={selectedValue === patient.id.toString()}
                    onChange={() => setSelectedValue(patient.id.toString())}
                />    
            </Flex>
        </CardContainer>
    )
}