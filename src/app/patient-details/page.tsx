import { Button } from "@/components/Button";
import { PrescriptionsTable } from "@/components/PrescriptionsTable";
import { Title } from "@/components/Title";

export default function PatientDetails() {
    return (
        <>
            <Title title="Patient overview">

                <Button 
                    icon="plus-icon.svg"
                    text="New prescription"
                    padding="13px 20px"
                />
            </Title>

            <PrescriptionsTable />
        </>
    )
}