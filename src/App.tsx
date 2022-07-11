// @mui
import { Container, Stack, Typography } from '@mui/material';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
// components
import SkeletonKanbanColumn from './components/SkeletonKanbanColumn';
// sections
import { filter } from 'lodash';
import KanbanColumn from './components/KanbanColumn';
import Page from './components/Page';
import initialData from './initial-data';

// ----------------------------------------------------------------------

export default function App() {
  const board = initialData;

  const onDragEnd = (result: DropResult) => {
    // Reorder card
    // const { destination, source, draggableId, type } = result;

    console.log('onDragEnd', result);
  };

  return (
    <Page title='Kanban' sx={{ height: 1 }}>
      <Container maxWidth={false} sx={{ height: 1 }}>
        <Typography variant='h4' sx={{ mb: 3 }}>
          Kanban App
        </Typography>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable
            droppableId='all-columns'
            direction='horizontal'
            type='column'
          >
            {(provided) => (
              <Stack
                {...provided.droppableProps}
                ref={provided.innerRef}
                direction='row'
                alignItems='flex-start'
                spacing={3}
                sx={{ height: 'calc(100% - 32px)', overflowY: 'hidden' }}
              >
                {!board.columnOrder.length ? (
                  <SkeletonKanbanColumn />
                ) : (
                  board.columnOrder.map((columnId, index) => (
                    <KanbanColumn
                      index={index}
                      key={columnId}
                      column={filter(board.columns, ['id', columnId])[0]}
                    />
                  ))
                )}

                {provided.placeholder}
              </Stack>
            )}
          </Droppable>
        </DragDropContext>
      </Container>
    </Page>
  );
}
