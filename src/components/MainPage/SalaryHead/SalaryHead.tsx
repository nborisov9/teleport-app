import React from 'react';
import { TableCell, TableHead, TableRow } from '@material-ui/core';

import { useHomeStyles } from '../../../pages/Countries/theme';

interface SalaryInfoProps {
  title: string;
  percentData: Array<number>;
}

const SalaryHead: React.FC<SalaryInfoProps> = ({ title, percentData }) => {
  const classes = useHomeStyles();

  return (
    <TableHead>
      <TableRow>
        <TableCell className={classes.countriesAllJobTitle}>{title}</TableCell>
        {percentData.map((percent) => (
          <TableCell key={percent} align="right">
            {percent}%
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default SalaryHead;
