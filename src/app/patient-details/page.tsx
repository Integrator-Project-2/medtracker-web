import { Button } from "@/components/Button";
import { LayoutContainer } from "@/components/LayoutContainer";
import { PrescriptionsTable } from "@/components/PrescriptionsTable";
import { SideBar } from "@/components/SideBar";
import { Title } from "@/components/Title";

export default function PatientDetails() {
    return (
        <LayoutContainer 
            flexDirection="row" 
            maxWidth="None"
            justifyContent="space-between"
            backgroundColor="var(--white-secondary)"    
        >
            <LayoutContainer 
                flex={1}
                flexDirection="column"
                maxWidth="1007px"
                margin="0 auto"
            >
                <Title title="Patient overview">

                    <Button 
                        icon="plus-icon.svg"
                        text="New prescription"
                        padding="13px 20px"
                    />
                </Title>

                <PrescriptionsTable />
            </LayoutContainer>

            <SideBar />
        </LayoutContainer>
    )
}