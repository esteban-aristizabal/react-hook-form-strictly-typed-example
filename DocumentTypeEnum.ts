/**
 * DocumentTypeEnum
 */

export enum DocumentTypeEnum {
  CC = "CC",
  NIT = "NIT",
  CE = "CE",
  TI = "TI",
  PP = "PP",
  RUT = "RUT",
  CURP = "CURP",
  RFC = "RFC",
  DNI = "DNI",
  PAS = "PAS",
  RUC = "RUC",
  CI = "CI",
}

export const DOCUMENT_TYPE_MXN: string[] = [
  DocumentTypeEnum.CURP,
  DocumentTypeEnum.RFC,
  DocumentTypeEnum.PP,
];

export const DOCUMENT_TYPE_COL: string[] = [
  DocumentTypeEnum.CC,
  DocumentTypeEnum.TI,
  DocumentTypeEnum.CE,
  DocumentTypeEnum.NIT,
];

export const DOCUMENT_TYPE_CHL: string[] = [
  DocumentTypeEnum.RUT,
  DocumentTypeEnum.TI,
  DocumentTypeEnum.PP,
  DocumentTypeEnum.CC,
];

export const DOCUMENT_TYPE_PER: string[] = [
  DocumentTypeEnum.DNI,
  DocumentTypeEnum.CE,
  DocumentTypeEnum.PAS,
];

export const DOCUMENT_TYPE_ECU: string[] = [
  DocumentTypeEnum.CI,
  DocumentTypeEnum.RUC,
  DocumentTypeEnum.PAS,
];
