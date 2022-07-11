// @mui
import { Box, Paper, Typography } from '@mui/material';
// @types
import { KanbanCard } from '../kanbanTypes';
// components

// ----------------------------------------------------------------------

type Props = {
  card: KanbanCard;
};

export default function KanbanTaskCard({ card }: Props) {
  const { content }: KanbanCard = card;

  return (
    <Paper
      sx={{
        m: 1,
        p: 1,
        position: 'relative',
        bgcolor: 'grey.400',
      }}
    >
      <Box width='100%'>
        <Typography
          noWrap
          variant='subtitle2'
          sx={{
            py: 3,
            pl: 5,
          }}
        >
          {content}
        </Typography>
      </Box>
    </Paper>
  );
}
