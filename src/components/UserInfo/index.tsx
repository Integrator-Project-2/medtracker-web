import { Patient } from "@/@types/Data/Patient";
import { PatientDetailSectionContainer, PatientDetailSectionTitle, TextPatientCPF, TextPatientName } from "../SideBar/side-bar";
import { TextInfo } from "../TextInfo";
import { TextInfoContainer } from "../TextInfo/text-info";
import { getGenderDescription } from "../../../utils/getGenderDescription";
import { SideBarSkeleton } from "../SideBarSkeleton";

interface UserInfoProps {
    patient: Patient;
    loading?: boolean;
}

export function UserInfo({ patient, loading }: UserInfoProps) {
    if (loading) {
        return <SideBarSkeleton />
    }

    const safePatient = patient || {
        user: { name: 'Not specified', email: 'Not specified', phone: 'Not specified', address: 'Not specified', birth_date: 'Not specified' },
        cpf: 'Not specified',
        gender: null,
        height: null,
        weight: null,
        allergies_and_observations: 'Not specified'
    };

    return (
        <>
            <TextPatientName>{safePatient?.user?.name || 'Not specified'}</TextPatientName>
            <TextPatientCPF>{safePatient?.cpf || 'Not specified'}</TextPatientCPF>

            <PatientDetailSectionContainer>
                <PatientDetailSectionTitle>Contact</PatientDetailSectionTitle>

                <TextInfo 
                    label='Email'
                    description={safePatient?.user?.email || 'Not specified'}
                />

                <TextInfo 
                    label='Phone number'
                    description={safePatient?.user?.phone || 'Not specified'}
                />

                <TextInfo 
                    label='Address'
                    description={safePatient?.user?.address || 'Not specified'}
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
                        description={safePatient?.user?.birth_date || 'Not specified'}
                    />

                    <TextInfo 
                        label='Gender'
                        description={getGenderDescription(safePatient.gender)}
                    />
                </TextInfoContainer>

                <TextInfoContainer
                    flexDirection='row'
                    gap='31px'
                >
                    <TextInfo 
                        label='Height'
                        description={safePatient?.height !== null ? `${safePatient.height} m` : 'Not specified'}
                    />

                    <TextInfo 
                        label='Weight'
                        description={safePatient?.weight !== null ? `${safePatient.weight} kg` : 'Not specified'}
                    />
                </TextInfoContainer>

                <TextInfo 
                    label='Allergies and observations'
                    description={safePatient?.allergies_and_observations !== null ? `${safePatient.allergies_and_observations}` : 'Not specified'}
                />
            </PatientDetailSectionContainer>
        </>
    )
}