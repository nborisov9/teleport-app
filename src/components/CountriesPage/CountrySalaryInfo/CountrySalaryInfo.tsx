import React from 'react';
import { Paper, Table, TableContainer, Typography } from '@material-ui/core';
import classNames from 'classnames';

import { useHomeStyles } from '../../../pages/Countries/theme';
import { ICountrySalaryData } from '../../../store/countries/types';
import SalaryHead from '../../MainPage/SalaryHead';
import SalaryBody from '../../MainPage/SalaryBody';

interface CountrySalaryInfoProps {
  countriesSalaryData: ICountrySalaryData[];
}

export const CountrySalaryInfo: React.FC<CountrySalaryInfoProps> = ({ countriesSalaryData }) => {
  const classes = useHomeStyles();
  const percentDataValue = [25, 50, 75];

  return (
    <>
      <Typography
        variant="h6"
        className={classNames(classes.countriesInfoTitle, classes.countriesInfoTitleMargin)}>
        salary info
      </Typography>
      <TableContainer className={classes.countriesAllSalaryInfo} component={Paper}>
        <Table size="small" aria-label="a dense table">
          <SalaryHead title="Jobs" percentData={percentDataValue} />
          <SalaryBody salaryData={countriesSalaryData} />
        </Table>
      </TableContainer>
    </>
  );
};
