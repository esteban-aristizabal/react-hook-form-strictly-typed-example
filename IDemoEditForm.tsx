export interface IDemoEditForm {
  clientName: string;
  contactDetails: {
    email: string;
    documentType?: string;
    documentNumber?: string;
  };
  periodicity?: "weekly" | "monthly";
  weeklyChargeDays: (string | false)[];
  monthlyCharge?: "halfMonth" | "endMonth";
}
