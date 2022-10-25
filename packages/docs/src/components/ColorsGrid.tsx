import { colors } from '@muoosic/stitches-config';
import { getContrast } from 'polished';

export function ColorsGrid(): JSX.Element[] {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(color, '#FFFFFF') < 3.5 ? '#000000' : '#FFFFFF',
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    );
  });
}
