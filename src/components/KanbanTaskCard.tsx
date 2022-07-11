import { Draggable } from 'react-beautiful-dnd';
// @mui
import { Box, Paper, Typography } from '@mui/material';
// @types
import { KanbanCard } from '../kanbanTypes';
// components

// ----------------------------------------------------------------------

type Props = {
  card: KanbanCard;
  index: number;
};

export default function KanbanTaskCard({ card, index }: Props) {
  const { id, content }: KanbanCard = card;

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Paper
            sx={{
              m: 1,
              p: 1,
              position: 'relative',
              bgcolor: 'grey.400',
            }}
          >
            <Box>
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
        </div>
      )}
    </Draggable>
  );
}
