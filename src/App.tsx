// @mui
import { Container, Stack, Typography } from '@mui/material';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
// components
import SkeletonKanbanColumn from './components/SkeletonKanbanColumn';
// sections
import { filter } from 'lodash';
import { useState } from 'react';
import KanbanColumn from './components/KanbanColumn';
import Page from './components/Page';
import initialData from './initial-data';

// ----------------------------------------------------------------------

export default function App() {
  const board = initialData;
  const [columnOrder, setColumnOrder] = useState(board.columnOrder);

  const onDragEnd = (result: DropResult) => {
    // Reorder card
    const { destination, source, draggableId, type } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === 'column') {
      const newColumnOrder = Array.from(columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      setColumnOrder(newColumnOrder);
      return;
    }
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
                {!columnOrder.length ? (
                  <SkeletonKanbanColumn />
                ) : (
                  columnOrder.map((columnId, index) => (
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
