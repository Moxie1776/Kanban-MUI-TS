import { Draggable } from 'react-beautiful-dnd';
// @mui
import { Paper, Stack, Typography } from '@mui/material';
// @types
import { KanbanColumn as Column } from '../kanbanTypes';
// components
//
import { filter } from 'lodash';
import initialData from '../initial-data';
import KanbanTaskCard from './KanbanTaskCard';

// ----------------------------------------------------------------------

type Props = {
  column: Column;
  index: number;
};

export default function KanbanColumn({ column, index }: Props) {
  const board = initialData;

  const { title, taskIds, id }: Column = column;

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Paper
          {...provided.draggableProps}
          ref={provided.innerRef}
          variant='outlined'
          sx={{ p: 2, bgcolor: 'grey.100' }}
        >
          <Stack spacing={3} {...provided.dragHandleProps}>
            <Typography variant='body1' component='h2'>
              {title}
            </Typography>

            <Stack spacing={2} width={280}>
              {taskIds.map((taskId) => (
                <KanbanTaskCard
                  key={taskId}
                  card={filter(board.tasks, ['id', taskId])[0]}
                />
              ))}
            </Stack>
          </Stack>
        </Paper>
      )}
    </Draggable>
  );
}
