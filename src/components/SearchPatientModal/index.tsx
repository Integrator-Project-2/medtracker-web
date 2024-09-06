import { Flex } from "@radix-ui/themes";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { TextInput } from "../TextInput";
import { UserCard } from "../UserCard";

interface SearchPatientModalProps {
    modalOpen: boolean;
    setModalOpen: (value: boolean) => void;
}

export function SearchPatientModal({ modalOpen, setModalOpen }: SearchPatientModalProps) {
    return (
        <Modal 
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            title="Vinculate new Patient"
            description="Enter a valid CPF number to search for a new patient"
            onSubmit={() => console.log("Submit clicked")}
            onCancel={() => setModalOpen(false)}
        >
            <Flex direction="row" gap="3">
                <TextInput 
                    width="100%"
                    placeholder="000.000.000-00"
                    margin="0px"
                    // value={cpf}
                    // onChange={(e) => setCpf(e.target.value)}
                />
                <Button 
                    icon="search-icon.svg"
                    color="var(--navy)"
                    backgroundColor="var(--light-navy)"
                    padding="10px"
                    // onClick={handleSearch}
                />
            </Flex>

            <Flex direction="column">
                <UserCard />
                <UserCard />
            </Flex>
      </Modal>
    );
}

