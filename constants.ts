import { TDemoEditForm } from "./useDemoEditState";

export const DEMO_EDIT_DEFAULT_VALUES: TDemoEditForm = {
  clientName: "",
  contactDetails: {
    documentNumber: "",
    documentType: "",
    email: "",
  },
  monthlyCharge: "halfMonth",
  weeklyChargeDays: [],
};

export const CHARGE_PERIODICITY: Record<string, string> = {
  weekly: "Semanal",
  monthly: "Mensual",
};

export const DAYS_CHARGE: Record<string, string> = {
  monday: "Lunes",
  friday: "Viernes",
};
