import {  Flex, Radio, Text } from "@radix-ui/themes";
import { UserAvatarIcon } from "../UserAvatarIcon";
import { CardContainer, UserCardText } from "./user-card";
import { Patient } from "@/@types/Data/Patient";
import { useEffect } from "react";

interface UserCardProps {
    patient: Patient;
    selectedValue: string;
    setSelectedValue: (value: string) => void;
}

export function UserCard({ patient, selectedValue, setSelectedValue }: UserCardProps) {

    useEffect(() => {
        console.log("selecionei o paciente de id: " + selectedValue)
    }, [selectedValue])

    return (
        <CardContainer>
            <Flex justify="between" align="center">
                <UserAvatarIcon />
                <UserCardText>
                    {patient.user.name}
                </UserCardText>   

                <UserCardText>
                    {patient.cpf}
                </UserCardText> 

                <UserCardText>
                    {patient.user.birth_date}
                </UserCardText>

                <Radio
                    value={patient.id.toString()}
                    checked={selectedValue === patient.id.toString()}
                    onChange={() => setSelectedValue(patient.id.toString())}
                />    
            </Flex>
        </CardContainer>
    )
}