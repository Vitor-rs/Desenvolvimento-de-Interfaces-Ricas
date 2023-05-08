import { Button, Grid, TextField, colors } from '@mui/material';
import { PlusCircle } from '@phosphor-icons/react';

export function TaskInput() {
    return (
        <Grid container spacing={0.5}>
            <Grid item xl={10} sm={12}>
                <TextField placeholder='Adcione uma nova tarefa' variant='outlined' name="task" fullWidth sx={{
                    backgroundColor: colors.grey[800]
                }} />
            </Grid>
            <Grid item xl={2} sm={12}>
                <Button variant="contained" fullWidth sx={{
                    height: '100%'
                }}>
                    <span> Criar </span> <PlusCircle size={32} />
                </Button>
            </Grid>
        </Grid>
    );
}
