import React from "react";
import { Box, Button, Container, Grid } from "@material-ui/core";
import { useDemoEditState } from "./useDemoEditState";
import { FormProvider } from "react-hook-form";
import CustomerInfoSection from "./CustomerInfoSection";
import ConfigSection from "./ConfigSection";

export interface IDemoEditStateProps {}

export type TDemoEditProps = IDemoEditStateProps;
export const DemoEdit: React.FC<TDemoEditProps> = (props: TDemoEditProps) => {
  const { form, actions } = useDemoEditState(props);

  return (
    <Container maxWidth="md">
      <Box mt={5} mb={5}>
        <h1>Editar Demo</h1>
      </Box>

      <FormProvider {...form}>
        <Grid container>
          <Grid item xs={12}>
            <CustomerInfoSection />

            <Box mt={5} mb={5} />

            <Box mt={5} mb={5} />

            <ConfigSection />

            <Box display="flex" justifyContent="flex-end" mt={3}>
              <Box ml={2}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disableElevation
                  onClick={form.handleSubmit(actions.handleSubmitForm)}
                >
                  Guardar
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </FormProvider>
    </Container>
  );
};

export default DemoEdit;
