import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';

import { useHomeStyles } from '../../pages/Home/theme';
import { ICitySalaryData } from '../../store/cities/types';

interface CitiesSalaryInfoProps {
  citiesSalaryData: Array<ICitySalaryData>;
}

export const CitiesSalaryInfo: React.FC<CitiesSalaryInfoProps> = ({
  citiesSalaryData,
}: CitiesSalaryInfoProps): React.ReactElement => {
  const classes = useHomeStyles();

  return (
    <>
      <Typography
        variant="h5"
        style={{ marginTop: 30, textAlign: 'center', fontWeight: 600 }}
        className={classes.countriesInfoTitle}>
        salary info
      </Typography>
      <TableContainer className={classes.countriesAllSalaryInfo} component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.countriesAllJobTitle}>Jobs</TableCell>
              <TableCell align="right">25%</TableCell>
              <TableCell align="right">50%</TableCell>
              <TableCell align="right">75%</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {citiesSalaryData.map(({ job, salary_percentiles }: ICitySalaryData, idx: number) => (
              <TableRow key={job.title + idx}>
                <TableCell component="th" scope="row">
                  {job.title}
                </TableCell>
                <TableCell align="right">{Math.round(salary_percentiles.percentile_25)}</TableCell>
                <TableCell align="right">{Math.round(salary_percentiles.percentile_50)}</TableCell>
                <TableCell align="right">{Math.round(salary_percentiles.percentile_75)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
