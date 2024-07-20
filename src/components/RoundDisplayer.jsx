
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { theme } from '../styles/style';

export const RoundDisplayer = ({currentRound, lastRound}) => {
    return (
            <Box sx={{background: theme.palette.roundColor.main, borderRadius: "10px", paddingInline: "10px"}}>
                <Typography variant="h4" sx={{
                    color: theme.palette.roundColor.secondary, 
                    fontFamily: theme.typography.font3.fontFamily, 
                    fontSize: theme.typography.font3.fontSize}}
                >
                    {currentRound}/{lastRound}
                </Typography>     
            </Box>
    )
}