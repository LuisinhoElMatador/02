import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { blue, grey } from '@mui/material/colors';

const CriarTarefa = ({ handleClose, tarefas, setTarefas }) => {
  const [idTarefa, setIdTarefa] = useState();
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [inicioTarefa, setInicioTarefa] = useState('');
  const [fimTarefa, setFimTarefa] = useState('');
  const [recursoTarefa, setRecursoTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');

  useEffect(() => {
    let proximoId = Math.max(...tarefas.map(tarefa => tarefa.idTarefa)) + 1;
    setIdTarefa(proximoId);
  }, [tarefas]);

  const handleRecurso = (event) => {
    setRecursoTarefa(event.target.value);
  };

  const handleStatus = (event) => {
    setStatusTarefa(event.target.value);
  };

  const handleSalvar = () => {
    setTarefas([...tarefas, {
      idTarefa,
      tituloTarefa,
      descricaoTarefa,
      inicioTarefa,
      fimTarefa,
      recursoTarefa,
      statusTarefa
    }]);
    handleClose();
  };

  return (
    <Grid container spacing={3} justifyContent="center">
      <Card sx={styles.card}>
        <CardHeader
          title="Cadastro de Tarefa"
          subheader="Preencha as informações da tarefa"
          sx={styles.cardHeader}
        />
        <CardContent sx={styles.cardContent}>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined" sx={styles.formControl}>
              <InputLabel htmlFor="tarefa_titulo">Título da Tarefa</InputLabel>
              <Input
                id="tarefa_titulo"
                value={tituloTarefa}
                onChange={e => setTituloTarefa(e.target.value)}
                label="Título da Tarefa"
              />
              <FormHelperText>Nome descritivo da tarefa.</FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined" sx={styles.formControl}>
              <InputLabel htmlFor="tarefa_descricao">Descrição</InputLabel>
              <Input
                id="tarefa_descricao"
                value={descricaoTarefa}
                onChange={e => setDescricaoTarefa(e.target.value)}
                label="Descrição"
              />
              <FormHelperText>Detalhes sobre a tarefa.</FormHelperText>
            </FormControl>
          </Grid>

          <Grid container spacing={2} mt={2}>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth variant="outlined" sx={styles.formControl}>
                <InputLabel htmlFor="tarefa_inicio">Início</InputLabel>
                <Input
                  id="tarefa_inicio"
                  type="date"
                  value={inicioTarefa}
                  onChange={e => setInicioTarefa(e.target.value)}
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
                  onChange={e => setFimTarefa(e.target.value)}
                  label="Fim"
                />
                <FormHelperText>Data prevista para o término.</FormHelperText>
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
                  <MenuItem value={'Recurso 1'}>Recurso 1</MenuItem>
                  <MenuItem value={'Recurso 2'}>Recurso 2</MenuItem>
                  <MenuItem value={'Recurso 3'}>Recurso 3</MenuItem>
                </Select>
                <FormHelperText>Selecione o recurso associado.</FormHelperText>
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
                  <MenuItem value={'Aguardando'}>Aguardando</MenuItem>
                  <MenuItem value={'Em Andamento'}>Em Andamento</MenuItem>
                  <MenuItem value={'Concluída'}>Concluída</MenuItem>
                </Select>
                <FormHelperText>Status atual da tarefa.</FormHelperText>
              </FormControl>
            </Grid>

            <Grid container spacing={2} mt={2} justifyContent="flex-end">
              <Grid item xs={6} sm={3} md={2}>
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  onClick={handleSalvar}
                  sx={styles.saveButton}
                >
                  Salvar
                </Button>
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={handleClose}
                  sx={styles.cancelButton}
                >
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
    padding: 4,
  },
  cardHeader: {
    backgroundColor: blue[500],
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
    backgroundColor: blue[500],
    '&:hover': {
      backgroundColor: blue[700],
    },
  },
  cancelButton: {
    borderColor: grey[500],
    color: grey[500],
    '&:hover': {
      borderColor: grey[700],
      color: grey[700],
    },
  },
};

export default CriarTarefa;
