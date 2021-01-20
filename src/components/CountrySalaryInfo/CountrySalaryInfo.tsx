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

interface ICountrySalaryData {
  job: {
    id?: string;
    title: string;
  };
  salary_percentiles: {
    percentile_25: number;
    percentile_50: number;
    percentile_75: number;
  };
}

interface CountrySalaryInfoProps {
  classes: ReturnType<typeof useHomeStyles>;
  countriesSalaryData: Array<ICountrySalaryData> | any;
}

export const CountrySalaryInfo: React.FC<CountrySalaryInfoProps> = ({
  classes,
  countriesSalaryData,
}: CountrySalaryInfoProps): React.ReactElement => {
  return (
    <>
      <Typography variant="h6" style={{ marginTop: 30 }} className={classes.countriesInfoTitle}>
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
            {countriesSalaryData.map(({ job, salary_percentiles }: any, idx: number) => (
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
