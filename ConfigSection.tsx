import React, { useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Divider,
  FormLabel,
  RadioGroup,
  Radio,
  FormHelperText
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { TDemoEditForm } from "./useDemoEditState";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { CHARGE_PERIODICITY, DAYS_CHARGE } from "./constants";
import { useWatch } from "react-hook-form";
import { PeriodicityEnum } from "./PeriodicityEnum";
import ConnectForm from "./ConnectForm";

const useStyles = makeStyles((theme: Theme) => ({
  toggleButtonGroupRoot: {
    display: "inline"
  },
  toggleButtonRoot: {
    borderRadius: "4px !important",
    background: theme.palette.background.default,
    border: "none",
    marginRight: 16,
    marginBottom: 16,
    color: theme.palette.text.primary,
    paddingRight: 24,
    paddingLeft: 24,
    "&.Mui-selected": {
      backgroundColor: theme.palette.secondary.dark,
      color: "white"
    },
    "&.Mui-selected:hover": {
      backgroundColor: theme.palette.secondary.dark,
      color: "white"
    }
  }
}));

export type TConfigurationSectionProps = {};
export const ConfigSection: React.FC<TConfigurationSectionProps> = () => {
  const classes = useStyles();

  return (
    <ConnectForm<TDemoEditForm>>
      {({ errors, getErrorMessage, setValue, onFocus, TypedController }) => {
        const periodicity = useWatch({ name: "periodicity" }) as string;

        useEffect(() => {}, [periodicity]);

        return (
          <Grid container spacing={3}>
            <Grid item xs={12} md={3} lg={3}>
              <Typography variant={"h5"} color="textPrimary">
                Configuración del cliente
              </Typography>
              <Box pt={1}>
                <Typography variant={"subtitle2"} color={"textSecondary"}>
                  Configuración del cliente
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={9} lg={9}>
              <Card>
                <CardContent>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography variant="h6" color="primary">
                        Periodicidad de cobro *
                      </Typography>
                      <FormControl
                        component="fieldset"
                        fullWidth
                        margin="normal"
                      >
                        <TypedController
                          {...onFocus(errors.periodicity)}
                          name={"periodicity"}
                          rules={{ required: true }}
                          render={({ onChange, ...typedProps }) => (
                            <ToggleButtonGroup
                              {...typedProps}
                              exclusive
                              classes={{ root: classes.toggleButtonGroupRoot }}
                              aria-label="periodicity"
                              onChange={(_e, value) =>
                                value !== null && onChange(value)
                              }
                            >
                              {Object.entries(CHARGE_PERIODICITY).map(
                                ([periodicity, translation], index: number) => (
                                  <ToggleButton
                                    key={index}
                                    style={{ textTransform: "none" }}
                                    value={periodicity}
                                    aria-label={periodicity}
                                    classes={{ root: classes.toggleButtonRoot }}
                                  >
                                    <Typography variant="h6">
                                      {translation}
                                    </Typography>
                                  </ToggleButton>
                                )
                              )}
                            </ToggleButtonGroup>
                          )}
                        />
                        <FormHelperText error={!!errors.periodicity}>
                          {!!errors.periodicity
                            ? getErrorMessage(errors.periodicity)
                            : "Periodicidad de cobro al cliente"}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    {periodicity === PeriodicityEnum.weekly && (
                      <Grid item xs={12}>
                        <FormLabel component="legend">Días de cobro</FormLabel>
                        <FormControl component="fieldset" fullWidth>
                          <FormGroup>
                            {Object.entries(DAYS_CHARGE).map(
                              ([day, translation], index: number) => (
                                <TypedController
                                  key={index}
                                  name={["weeklyChargeDays", index]}
                                  defaultValue={false}
                                  render={({
                                    onChange,
                                    value,
                                    ...typedProps
                                  }) => (
                                    <FormControlLabel
                                      control={
                                        <Checkbox
                                          {...typedProps}
                                          color="primary"
                                          checked={!!value}
                                          onChange={e =>
                                            onChange(e.target.checked && day)
                                          }
                                        />
                                      }
                                      label={`${translation}`}
                                    />
                                  )}
                                />
                              )
                            )}
                          </FormGroup>
                        </FormControl>
                      </Grid>
                    )}
                    {periodicity === PeriodicityEnum.monthly && (
                      <Grid item xs={12} md={6}>
                        <FormControl
                          component="fieldset"
                          fullWidth
                          margin="normal"
                        >
                          <FormLabel component="legend">
                            Fecha mensual de cobro *
                          </FormLabel>
                          <TypedController
                            {...onFocus(errors.monthlyCharge)}
                            name="monthlyCharge"
                            defaultValue={"halfMonth"}
                            render={typedProps => (
                              <RadioGroup
                                row
                                aria-label="monthlyCharge"
                                {...typedProps}
                              >
                                <FormControlLabel
                                  value="halfMonth"
                                  control={<Radio color="primary" />}
                                  label="Mitad de mes"
                                />
                                <FormControlLabel
                                  value="endMonth"
                                  control={<Radio color="primary" />}
                                  label="Fin de mes"
                                />
                              </RadioGroup>
                            )}
                          />
                        </FormControl>
                      </Grid>
                    )}
                    <Grid item xs={12}>
                      <Box mb={2} mt={1}>
                        <Divider />
                      </Box>
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

export default ConfigSection;
