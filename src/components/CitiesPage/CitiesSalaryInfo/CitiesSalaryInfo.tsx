import React from 'react';
import { Paper, Table, TableContainer, Typography } from '@material-ui/core';
import classNames from 'classnames';

import { useHomeStyles } from '../../../pages/Countries/theme';
import { ICitySalaryData } from '../../../store/cities/types';
import SalaryHead from '../../MainPage/SalaryHead';
import SalaryBody from '../../MainPage/SalaryBody';

interface CitiesSalaryInfoProps {
  citiesSalaryData: Array<ICitySalaryData>;
}

export const CitiesSalaryInfo: React.FC<CitiesSalaryInfoProps> = ({ citiesSalaryData }) => {
  const classes = useHomeStyles();
  const percentDataValue = [25, 50, 75];

  return (
    <>
      <Typography
        variant="h5"
        className={classNames(classes.countriesInfoTitle, classes.countriesInfoTitleBold)}>
        salary info
      </Typography>
      <TableContainer className={classes.countriesAllSalaryInfo} component={Paper}>
        <Table size="small" aria-label="a dense table">
          <SalaryHead title="Jobs" percentData={percentDataValue} />
          <SalaryBody salaryData={citiesSalaryData} />
        </Table>
      </TableContainer>
    </>
  );
};
