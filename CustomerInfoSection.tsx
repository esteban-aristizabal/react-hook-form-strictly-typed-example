import React, { useRef } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import ConnectForm from "./ConnectForm";
import { TDemoEditForm } from "./useDemoEditState";
import { DOCUMENT_TYPE_ECU } from "./DocumentTypeEnum";

export type TConfigurationSectionProps = {};
export const CustomerInfoSection: React.FC<TConfigurationSectionProps> = () => {
  return (
    <ConnectForm<TDemoEditForm>>
      {({ errors, getErrorMessage, onFocus, TypedController }) => {
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} md={3} lg={3}>
              <Typography variant={"h5"} color="textPrimary">
                Información del cliente
              </Typography>
              <Box pt={1}>
                <Typography variant={"subtitle2"} color={"textSecondary"}>
                  Información del cliente
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={9} lg={9}>
              <Card>
                <CardContent>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography variant="h6" color="primary">
                        Datos del cliente
                      </Typography>
                      <TypedController
                        {...onFocus(errors.clientName)}
                        name={"clientName"}
                        rules={{ required: true }}
                        render={(typedProps) => (
                          <TextField
                            {...typedProps}
                            id="clientName"
                            label="Nombre del cliente"
                            variant="outlined"
                            error={!!errors.clientName}
                            required
                            fullWidth
                            margin="normal"
                            helperText={
                              !!errors.clientName &&
                              getErrorMessage(errors.clientName)
                            }
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TypedController
                        {...onFocus(errors.contactDetails?.email)}
                        name={["contactDetails", "email"]}
                        rules={{ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i }}
                        render={(typedProps) => (
                          <TextField
                            {...typedProps}
                            id="email"
                            label="Correo electrónico"
                            variant="outlined"
                            error={!!errors.contactDetails?.email}
                            required
                            fullWidth
                            margin="normal"
                            helperText={
                              !!errors.contactDetails?.email &&
                              getErrorMessage(
                                errors.contactDetails?.email,
                                "email"
                              )
                            }
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                      <FormControl
                        variant="outlined"
                        error={!!errors.contactDetails?.documentType}
                        fullWidth
                        margin="normal"
                      >
                        <InputLabel>Tipo de documento</InputLabel>
                        <TypedController
                          {...onFocus(errors.contactDetails?.documentType)}
                          name={["contactDetails", "documentType"]}
                          render={(typedProps) => (
                            <Select {...typedProps} label="Tipo de documento">
                              {DOCUMENT_TYPE_ECU.map(
                                (documentType: string, index: number) => (
                                  <MenuItem key={index} value={documentType}>
                                    {documentType}
                                  </MenuItem>
                                )
                              )}
                            </Select>
                          )}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TypedController
                        {...onFocus(errors.contactDetails?.documentNumber)}
                        name={["contactDetails", "documentNumber"]}
                        defaultValue=""
                        render={(typedProps) => (
                          <TextField
                            {...typedProps}
                            id="documentNumber"
                            label="Número de documento"
                            variant="outlined"
                            error={!!errors.contactDetails?.documentNumber}
                            fullWidth
                            margin="normal"
                          />
                        )}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        );
      }}
    </ConnectForm>
  );
};

export default CustomerInfoSection;
