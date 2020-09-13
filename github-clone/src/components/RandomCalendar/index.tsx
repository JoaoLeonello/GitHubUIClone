import React from 'react';
import Heatmap from 'react-calendar-heatmap';
import { subYears } from 'date-fns';

import { Container } from './styles';

const RandomCalendar: React.FC = () => {
    const endDate = new Date();
    const startDate = subYears(new Date(), 1);

  return(
      <Container>
          <div className="wrapper">
            <Heatmap
                startDate={startDate}
                endDate={endDate}
                values={[]}
            />

            <span>
                random calendar (do not represent actual data)
            </span>
          </div>
      </Container>
  )
}

export default RandomCalendar;