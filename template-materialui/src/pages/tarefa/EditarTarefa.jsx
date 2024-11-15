import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

// Componente EditarTarefa, recebendo props de ListarTarefa
const EditarTarefa = ({ handleCloseEditar, idTarefaSelecionada, tarefas, tarefa, setTarefas }) => {
  const [idTarefa, setIdTarefa] = useState();
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [inicioTarefa, setInicioTarefa] = useState('');
  const [fimTarefa, setFimTarefa] = useState('');
  const [recursoTarefa, setRecursoTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');

  // Popular os campos do formulário com os dados da tarefa selecionada
  useEffect(() => {
    setIdTarefa(idTarefaSelecionada);
    setTituloTarefa(tarefa.tituloTarefa);
    setDescricaoTarefa(tarefa.descricaoTarefa);
    setInicioTarefa(tarefa.inicioTarefa);
    setFimTarefa(tarefa.fimTarefa);
    setRecursoTarefa(tarefa.recursoTarefa);
    setStatusTarefa(tarefa.statusTarefa);
  }, [idTarefaSelecionada, tarefa]);

  // Funções para atualizar os estados dos campos de formulário
  const handleRecurso = (event) => {
    setRecursoTarefa(event.target.value);
  };

  const handleStatus = (event) => {
    setStatusTarefa(event.target.value);
  };

  const handleEditar = () => {
    setTarefas((current) =>
      current.map((obj) =>
        obj.idTarefa === idTarefaSelecionada
          ? {
              ...obj,
              idTarefa: idTarefaSelecionada,
              tituloTarefa,
              descricaoTarefa,
              inicioTarefa,
              fimTarefa,
              recursoTarefa,
              statusTarefa,
            }
          : obj
      )
    );
    handleCloseEditar();
  };

  return (
    <Grid container spacing={3} justifyContent="center">
      <Card sx={styles.card}>
        <CardHeader title="Edição de Tarefa" subheader="Altere as informações da tarefa" sx={styles.cardHeader} />
        <CardContent sx={styles.cardContent}>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined" sx={styles.formControl}>
              <InputLabel htmlFor="tarefa_titulo">Título da Tarefa</InputLabel>
              <Input
                id="tarefa_titulo"
                value={tituloTarefa}
                onChange={(e) => setTituloTarefa(e.target.value)}
                label="Título da Tarefa"
              />
              <FormHelperText>Título descritivo da tarefa.</FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined" sx={styles.formControl}>
              <InputLabel htmlFor="tarefa_descricao">Descrição</InputLabel>
              <Input
                id="tarefa_descricao"
                value={descricaoTarefa}
                onChange={(e) => setDescricaoTarefa(e.target.value)}
                label="Descrição"
              />
              <FormHelperText>Detalhes adicionais sobre a tarefa.</FormHelperText>
            </FormControl>
          </Grid>

          <Grid container spacing={3} mt={2}>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth variant="outlined" sx={styles.formControl}>
                <InputLabel htmlFor="tarefa_inicio">Início</InputLabel>
                <Input
                  id="tarefa_inicio"
                  type="date"
                  value={inicioTarefa}
                  onChange={(e) => setInicioTarefa(e.target.value)}
                  label="Início"
                />
                <FormHelperText>Data de início da tarefa.</FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth variant="outlined" sx={styles.formControl}>
                <InputLabel htmlFor="tarefa_fim">Fim</InputLabel>
                <Input
                  id="tarefa_fim"
                  type="date"
                  value={fimTarefa}
                  onChange={(e) => setFimTarefa(e.target.value)}
                  label="Fim"
                />
                <FormHelperText>Data de término da tarefa.</FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth variant="outlined" sx={styles.formControl}>
                <InputLabel htmlFor="tarefa_recurso">Recurso</InputLabel>
                <Select
                  id="tarefa_recurso"
                  value={recursoTarefa}
                  onChange={handleRecurso}
                  label="Recurso"
                >
                  <MenuItem value="Recurso 1">Recurso 1</MenuItem>
                  <MenuItem value="Recurso 2">Recurso 2</MenuItem>
                  <MenuItem value="Recurso 3">Recurso 3</MenuItem>
                </Select>
                <FormHelperText>Selecione o recurso alocado para esta tarefa.</FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth variant="outlined" sx={styles.formControl}>
                <InputLabel htmlFor="tarefa_status">Status</InputLabel>
                <Select
                  id="tarefa_status"
                  value={statusTarefa}
                  onChange={handleStatus}
                  label="Status"
                >
                  <MenuItem value="Aguardando">Aguardando</MenuItem>
                  <MenuItem value="Em Andamento">Em Andamento</MenuItem>
                  <MenuItem value="Concluída">Concluída</MenuItem>
                </Select>
                <FormHelperText>Status atual da tarefa.</FormHelperText>
              </FormControl>
            </Grid>

            <Grid container spacing={2} mt={2} justifyContent="flex-end">
              <Grid item xs={6} sm={3} md={2}>
                <Button variant="contained" fullWidth color="primary" onClick={handleEditar} sx={styles.saveButton}>
                  Salvar
                </Button>
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
                <Button variant="outlined" fullWidth onClick={handleCloseEditar} sx={styles.cancelButton}>
                  Cancelar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

// Estilos com Material-UI sx
const styles = {
  card: {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: 800,
    bgcolor: 'background.paper',
    boxShadow: 3,
    borderRadius: 2,
    p: 3,
  },
  cardHeader: {
    backgroundColor: '#1976d2',
    color: 'white',
    borderRadius: '8px 8px 0 0',
  },
  cardContent: {
    padding: '16px 32px',
  },
  formControl: {
    marginBottom: 16,
  },
  saveButton: {
    backgroundColor: '#1976d2',
    '&:hover': {
      backgroundColor: '#1565c0',
    },
  },
  cancelButton: {
    borderColor: '#bdbdbd',
    color: '#bdbdbd',
    '&:hover': {
      borderColor: '#9e9e9e',
      color: '#9e9e9e',
    },
  },
};

export default EditarTarefa;
