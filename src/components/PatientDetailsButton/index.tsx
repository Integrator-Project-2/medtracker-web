import Image from "next/image";
import { Button } from "./patient-details-button";
import { useRouter } from "next/navigation";

export function PatientDetailsButton() {
    const router = useRouter();

    const handleClick = () => {
      router.push('/patient-details');
    };

    return (
        <Button onClick={handleClick}>
            <Image 
                src='fluent-apps-list-icon.svg'
                alt="Detail icon"
                width={24}
                height={24}
            />
        </Button>
    )
}