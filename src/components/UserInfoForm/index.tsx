import { Patient } from "@/@types/Data/Patient";
import { useState } from "react";
import { TextInput } from "../TextInput";
import { PatientDetailSectionContainer, PatientDetailSectionTitle } from "../SideBar/side-bar";
import { TextInfoContainer } from "../TextInfo/text-info";
import { DateInput } from "../DateInput";
import { TextArea } from "../TextArea";
import { Button } from "../Button";
import { LayoutContainer } from "../LayoutContainer";

interface UserInfoFormProps {
    patient: Patient;
    onSubmit: (updatedPatient: Patient) => void;
    onCancel: () => void;
}


export function UserInfoForm({ patient, onSubmit, onCancel }: UserInfoFormProps) {
    const [formData, setFormData] = useState(patient);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            user: {
                ...formData.user,
                [e.target.name]: e.target.value,
            }
        });
    };

    const handlePersonalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        onSubmit(formData);
    };

    return (
        <>
            <TextInput
                label="Name"
                // name="name"
                value={formData.user.name}
                onChange={handleChange}
                placeholder="Name"
                margin="12px 0"
            />

            <TextInput
                label="CPF"
                // name="cpf"
                value={formData.cpf}
                onChange={handlePersonalChange}
                placeholder="CPF"
                margin="0"
            />

            <PatientDetailSectionContainer>
                <PatientDetailSectionTitle>Contact</PatientDetailSectionTitle>

                <TextInput
                    label="Email"
                    // name="email"
                    value={formData.user.email}
                    onChange={handleChange}
                    placeholder="Email"
                    margin="0"
                />

                <TextInput
                    label="Phone number"
                    // name="phone"
                    value={formData.user.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    margin="0"
                />

                <TextInput
                    label="Address"
                    // name="address"
                    value={formData.user.address}
                    onChange={handleChange}
                    placeholder="Address"
                    margin="0"
                />
            </PatientDetailSectionContainer>

            <PatientDetailSectionContainer>
                <PatientDetailSectionTitle>Personal</PatientDetailSectionTitle>

                <TextInfoContainer 
                    flexDirection="row" 
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <DateInput
                        label="Date of birth"
                        // name="birth_date"
                        value={formData.user.birth_date}
                        // onChange={handleChange}
                        placeholder="Date of birth"
                        margin="0"
                        width="120px"
                    />

                    <TextInput
                        label="Gender"
                        // name="gender"
                        value={formData.gender?.toString()}
                        onChange={handlePersonalChange}
                        placeholder="Gender"
                        margin="0"
                        width="120px"
                    />
                </TextInfoContainer>

                <TextInfoContainer flexDirection="row" justifyContent="space-between">
                    <TextInput
                        label="Height"
                        // name="height"
                        value={formData.height !== null ? formData.height.toString() : ''}
                        onChange={handlePersonalChange}
                        placeholder="Height (m)"
                        margin="0"
                        width="120px"
                    />

                    <TextInput
                        label="Weight"
                        // name="weight"
                        value={formData.weight !== null ? formData.weight.toString() : ''}
                        onChange={handlePersonalChange}
                        placeholder="Weight (kg)"
                        margin="0"
                        width="120px"
                    />
                </TextInfoContainer>

                <TextArea
                    label="Allergies and observations"
                    // name="allergies_and_observations"
                    value={formData.allergies_and_observations || ''}
                    onChange={handlePersonalChange}
                    placeholder="Allergies and observations"
                    margin="0"
                    width="100%"
                    height="83px"
                />
            </PatientDetailSectionContainer>

            <LayoutContainer
                flexDirection="row"
                height="none"
                margin="15px 0"
                justifyContent="space-between"
                maxWidth="100%"
            >
                <Button 
                    backgroundColor="var(--light-navy)" 
                    fontSize="10px"
                    color="var(--light-blue)"
                    borderRadius="8px"
                    text="Cancel"
                    padding="12px 36px"
                />

                <Button 
                    backgroundColor="var(--navy)" 
                    fontSize="12px"
                    color="var(--white)"
                    borderRadius="8px"
                    text="Done"
                    padding="12px 36px"
                />
            </LayoutContainer>

        </>
    );
}