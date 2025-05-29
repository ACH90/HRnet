import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../store/employeeSlice";

export function useCreateEmployeeForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: null, // dayjs object
    startDate: null,
    street: "",
    city: "",
    state: "Alabama",
    zipCode: "",
    department: "Sales",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const dispatch = useDispatch();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  //Memes fonctions appelées différemment
  function handleDropdownChange(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function handleDateChange(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function handleSave(e) {
    e.preventDefault();
    const isFormValid =
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.street.trim() !== "" &&
      formData.city.trim() !== "" &&
      formData.zipCode.trim() !== "" &&
      formData.state.trim() !== "" &&
      formData.department.trim() !== "" &&
      formData.dateOfBirth?.isValid?.() &&
      formData.startDate?.isValid?.();

    if (!isFormValid) {
      alert("Merci de remplir tous les champs !");
      return;
    }
    // Convertir les dates en string (format court) avant d’envoyer dans Redux
    const payload = {
      ...formData,
      dateOfBirth: formData.dateOfBirth?.format("DD/MM/YYYY") || "",
      startDate: formData.startDate?.format("DD/MM/YYYY") || "",
    };

    dispatch(addEmployee(payload));
    setShowConfirmation(true);

    // Réinitialiser le formulaire
    setFormData({
      firstName: "",
      lastName: "",
      dateOfBirth: null,
      startDate: null,
      street: "",
      city: "",
      state: "Alabama",
      zipCode: "",
      department: "Sales",
    });
  }

  return {
    formData,
    handleChange,
    handleDropdownChange,
    handleDateChange,
    handleSave,
    showConfirmation,
    setShowConfirmation,
    setFormData,
  };
}
