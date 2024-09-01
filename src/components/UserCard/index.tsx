import { Card, Flex, Radio, Text } from "@radix-ui/themes";
import { UserAvatarIcon } from "../UserAvatarIcon";
import { CardContainer, UserCardText } from "./user-card";
import { useState } from "react";

export function UserCard() {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const handleCardClick = (value: string) => {
        setSelectedValue(value);
    };

    return (
        <CardContainer onClick={() => handleCardClick}>
            <Flex justify="between" align="center">
                <UserAvatarIcon />
                <UserCardText>
                    Teodros Girmay
                </UserCardText>   

                <UserCardText>
                    000.000.000-00
                </UserCardText> 

                <UserCardText>
                    09-20-1999
                </UserCardText>

                <Radio
                    name="example"
                    value="1"
                    checked={selectedValue === "1"}
                    onChange={() => setSelectedValue("1")}
                />    
            </Flex>
        </CardContainer>
    )
}