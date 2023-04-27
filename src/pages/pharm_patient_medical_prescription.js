import { useRouter } from "next/router";
import ViewPatientMedicalPrescription from "../Components/PharmPatientMedicalPrescription";

function PharmPatientMedicalRecords() {
  const router = useRouter();
  const { patientId } = router.query;

  return <ViewPatientMedicalPrescription patientId={patientId} />;
}

export default PharmPatientMedicalRecords;