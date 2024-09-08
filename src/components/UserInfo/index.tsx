import { Patient } from "@/@types/Data/Patient";
import { PatientDetailSectionContainer, PatientDetailSectionTitle, TextPatientCPF, TextPatientName } from "../SideBar/side-bar";
import { TextInfo } from "../TextInfo";
import { TextInfoContainer } from "../TextInfo/text-info";
import { getGenderDescription } from "../../../utils/getGenderDescription";

interface UserInfoProps {
    patient: Patient;
}

export function UserInfo({ patient }: UserInfoProps) {
    if (!patient) {
        return <div>Loading...</div>; 
    }

    return (
        <>
            <TextPatientName>{patient?.user?.name || 'Loading...'}</TextPatientName>
            <TextPatientCPF>{patient.cpf}</TextPatientCPF>

            <PatientDetailSectionContainer>
                <PatientDetailSectionTitle>Contact</PatientDetailSectionTitle>

                <TextInfo 
                    label='Email'
                    description={patient?.user?.email || 'Loading...'}
                />

                <TextInfo 
                    label='Phone number'
                    description={patient?.user?.phone || 'Loading...'}
                />

                <TextInfo 
                    label='Address'
                    description={patient?.user?.address || 'Loading...'}
                />
            </PatientDetailSectionContainer>

            <PatientDetailSectionContainer>
                <PatientDetailSectionTitle>Personal</PatientDetailSectionTitle>

                <TextInfoContainer
                    flexDirection='row'
                    gap='31px'
                >
                    <TextInfo 
                        label='Date of birth'
                        description={patient?.user?.birth_date || 'Loading...'}
                    />

                    <TextInfo 
                        label='Gender'
                        description={getGenderDescription(patient.gender)}
                    />
                </TextInfoContainer>


                <TextInfoContainer
                    flexDirection='row'
                    gap='31px'
                >
                    <TextInfo 
                        label='Height'
                        description={patient.height !== null ? `${patient.height} m` : 'Not specified'}
                    />

                    <TextInfo 
                        label='Weight'
                        description={patient.weight !== null ? `${patient.weight} kg` : 'Not specified'}
                    />
                </TextInfoContainer>

                <TextInfo 
                    label='Allergies and observations'
                    description={patient.allergies_and_observations !== null ? `${patient.allergies_and_observations}` : 'Not specified'}
                />
            </PatientDetailSectionContainer>
        </>
    )
}