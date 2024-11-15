import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';

import CriarTarefa from './CriarTarefa';
import EditarTarefa from './EditarTarefa';

// Função para criar dados das tarefas
function createData(
  idTarefa, tituloTarefa, descricaoTarefa, inicioTarefa, fimTarefa, statusTarefa, recursoTarefa
) {
  return { idTarefa, tituloTarefa, descricaoTarefa, inicioTarefa, fimTarefa, statusTarefa, recursoTarefa };
}

// Dados iniciais das tarefas
const initialRows = [
  createData(1, 'Tarefa 1', 'Descrição da Tarefa 1', '2022-01-01', '2022-01-02', 'Concluída', 'Recurso 1'),
  createData(2, 'Tarefa 2', 'Descrição da Tarefa 2', '2022-01-03', '2022-01-04', 'Em Andamento', 'Recurso 2'),
  createData(3, 'Tarefa 3', 'Descrição da Tarefa 3', '2022-01-04', '2022-01-05', 'Em Andamento', 'Recurso 3'),
  createData(4, 'Tarefa 4', 'Descrição da Tarefa 4', '2022-01-05', '2022-01-06', 'Em Andamento', 'Recurso 4'),
  createData(5, 'Tarefa 5', 'Descrição da Tarefa 5', '2022-01-06', '2022-01-07', 'Em Andamento', 'Recurso 5'),
  createData(6, 'Tarefa 6', 'Descrição da Tarefa 6', '2022-01-07', '2022-01-08', 'Aguardando', 'Recurso 6'),
];

const ListarTarefa = () => {
  const [open, setOpen] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [tarefas, setTarefas] = useState([]);
  const [tarefa, setTarefa] = useState();
  const [idTarefaSelecionada, setIdTarefaSelecionada] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenEditar = () => setOpenEditar(true);
  const handleCloseEditar = () => setOpenEditar(false);

  // Inicializa a lista de tarefas
  useEffect(() => {
    setTarefas(initialRows);
  }, []);

  // Abre o modal de edição com a tarefa selecionada
  const handleEditar = (id) => {
    setIdTarefaSelecionada(id);
    const tarefaParaEditar = tarefas.find((obj) => obj.idTarefa === id);
    setTarefa(tarefaParaEditar);
    setOpenEditar(true);
  };

  // Deleta a tarefa selecionada
  const handleDeletar = (id) => {
    setTarefas(current => current.filter(tarefa => tarefa.idTarefa !== id));
  };

  return (
    <>
      <Card sx={styles.card}>
        <CardHeader
          title="Tarefas"
          subheader="Listagem de Tarefas"
          sx={styles.cardHeader}
        />
        <CardContent>
          <TableContainer component={Paper}>
            <Table sx={styles.table} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Título</TableCell>
                  <TableCell align="right">Descrição</TableCell>
                  <TableCell align="right">Início</TableCell>
                  <TableCell align="right">Finalização</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Recurso</TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tarefas.map((row) => (
                  <TableRow key={row.idTarefa}>
                    <TableCell>{row.idTarefa}</TableCell>
                    <TableCell>{row.tituloTarefa}</TableCell>
                    <TableCell align="right">{row.descricaoTarefa}</TableCell>
                    <TableCell align="right">{row.inicioTarefa}</TableCell>
                    <TableCell align="right">{row.fimTarefa}</TableCell>
                    <TableCell align="right">{row.statusTarefa}</TableCell>
                    <TableCell align="right">{row.recursoTarefa}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => handleEditar(row.idTarefa)}
                        sx={styles.editButton}
                      >
                        <EditIcon fontSize="small" />
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleDeletar(row.idTarefa)}
                        sx={styles.deleteButton}
                      >
                        <DeleteIcon fontSize="small" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={handleOpen}
            sx={styles.createButton}
          >
            Criar Tarefa
          </Button>
          <Button size="small" variant="outlined" sx={styles.cancelButton}>
            Cancelar
          </Button>
        </CardActions>
      </Card>

      {/* Modal Criar Tarefa */}
      <Modal open={open} onClose={handleClose}>
        <div sx={styles.modal}>
          <CriarTarefa handleClose={handleClose} tarefas={tarefas} setTarefas={setTarefas} />
        </div>
      </Modal>

      {/* Modal Editar Tarefa */}
      <Modal open={openEditar} onClose={handleCloseEditar}>
        <div sx={styles.modal}>
          <EditarTarefa
            handleCloseEditar={handleCloseEditar}
            idTarefaSelecionada={idTarefaSelecionada}
            tarefas={tarefas}
            tarefa={tarefa}
            setTarefas={setTarefas}
          />
        </div>
      </Modal>
    </>
  );
};

// Estilos com Material-UI sx
const styles = {
  card: {
    maxWidth: 1200,
    margin: '20px auto',
    borderRadius: 8,
    boxShadow: 3,
  },
  cardHeader: {
    backgroundColor: '#1976d2',
    color: 'white',
    borderRadius: '8px 8px 0 0',
  },
  table: {
    minWidth: 650,
  },
  editButton: {
    backgroundColor: '#388e3c',
    '&:hover': {
      backgroundColor: '#2c6f32',
    },
  },
  deleteButton: {
    backgroundColor: '#d32f2f',
    '&:hover': {
      backgroundColor: '#c62828',
    },
  },
  createButton: {
    backgroundColor: '#1976d2',
    '&:hover': {
      backgroundColor: '#1565c0',
    },
  },
  cancelButton: {
    borderColor: '#9e9e9e',
    color: '#9e9e9e',
    '&:hover': {
      borderColor: '#757575',
      color: '#757575',
    },
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: 8,
    boxShadow: 24,
  },
};

export default ListarTarefa;
