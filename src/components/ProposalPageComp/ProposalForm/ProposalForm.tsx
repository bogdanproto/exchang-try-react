import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MobileDatePicker, MobileTimePicker } from '@mui/x-date-pickers';
import {
  Stack,
  Paper,
  Box,
  FormControlLabel,
  Button,
  Switch,
} from '@mui/material';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { formatEqptsSelector, formatSpotSelector } from 'services/helpers';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { selectUser } from 'services/redux/auth/selectors';
import { getAllSpots } from 'services/redux/data/operations';
import { selectSpots } from 'services/redux/data/selectors';
import { IProposalForm } from 'interfaces';
import { schemaProposalForm } from 'const';
import { ErrorInputForm, HFSelect } from 'components/Common';

export const ProposalForm = () => {
  const dispatch = useTypeDispatch();
  const { eqpts } = useTypeSelector(selectUser);
  const spots = useTypeSelector(selectSpots);

  const {
    handleSubmit,
    watch,
    reset,
    control,
    formState: { isSubmitSuccessful, errors },
  } = useForm<IProposalForm>({
    defaultValues: {
      allday: false,
      time: dayjs(),
      date: dayjs(),
      auto_accept: false,
      is_phone: false,
    },
    resolver: yupResolver(schemaProposalForm),
  });

  useEffect(() => {
    if (!spots.length) {
      dispatch(getAllSpots());
    }
  }, [dispatch, spots.length]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<IProposalForm> = data => {
    console.log(data);
  };

  const isCheckedAllDay = watch('allday');

  return (
    <Paper
      elevation={3}
      style={{
        position: 'relative',
        padding: '18px',
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          style={{
            position: 'relative',
            paddingTop: '24px',
          }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <Controller
            name="allday"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '2px',
                  padding: '4px',
                }}
                control={
                  <Switch {...field} checked={field.value} size="small" />
                }
                label="ALLDAY"
                labelPlacement="start"
              />
            )}
          />

          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <MobileDatePicker
                {...field}
                minDate={dayjs()}
                label="Date"
                sx={{ width: '100%' }}
                format="DD.MM.YYYY"
              />
            )}
          />

          <Controller
            name="time"
            control={control}
            render={({ field }) => (
              <MobileTimePicker
                {...field}
                label="Time"
                disabled={isCheckedAllDay}
                ampm={false}
              />
            )}
          />

          <Box
            style={{
              marginBottom: '4px',
            }}
          >
            <HFSelect
              multiple={false}
              control={control}
              name="spot"
              label="Spot"
              placeholder="Spots wasn't loaded"
              options={formatSpotSelector(spots)}
            />
            <ErrorInputForm>{errors.spot?.message}</ErrorInputForm>
          </Box>

          <Box
            style={{
              marginBottom: '4px',
            }}
          >
            <HFSelect
              multiple={true}
              control={control}
              name="eqpts"
              label="Equipments"
              placeholder="Add equipment to your profile"
              options={formatEqptsSelector(eqpts)}
            />
            <ErrorInputForm>{errors.eqpts?.message}</ErrorInputForm>
          </Box>

          <Box>
            <Controller
              name="is_phone"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={<Switch checked={field.value} {...field} />}
                  label="Show my phone number"
                />
              )}
            />

            <Controller
              name="auto_accept"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={<Switch {...field} checked={field.value} />}
                  label="Auto accept"
                  color="primary"
                />
              )}
            />
          </Box>
          <Stack
            spacing={2}
            direction="row"
            sx={{ display: 'flex', justifyContent: 'space-around' }}
          >
            <Button type="submit" variant="contained">
              SUBMIT
            </Button>
          </Stack>
        </Box>
      </form>
    </Paper>
  );
};