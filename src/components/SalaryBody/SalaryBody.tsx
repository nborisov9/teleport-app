import { TableBody, TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import { ICitySalaryData } from '../../store/cities/types';
import { ICountrySalaryData } from '../../store/countries/types';

interface ISalaryBodyProps {
  salaryData: ICitySalaryData[] | ICountrySalaryData[];
}

const SalaryBody: React.FC<ISalaryBodyProps> = ({ salaryData }) => (
  <TableBody>
    {salaryData.map(({ job, salary_percentiles }) => (
      <TableRow key={job.id}>
        <TableCell component="th" scope="row">
          {job.title}
        </TableCell>
        <TableCell align="right">{Math.round(salary_percentiles.percentile_25)}</TableCell>
        <TableCell align="right">{Math.round(salary_percentiles.percentile_50)}</TableCell>
        <TableCell align="right">{Math.round(salary_percentiles.percentile_75)}</TableCell>
      </TableRow>
    ))}
  </TableBody>
);

export default SalaryBody;
