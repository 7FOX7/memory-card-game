import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { theme } from '../styles/style';

export const RoundDisplayer = ({currentRound, lastRound}) => {
    const isMobile = useMediaQuery(theme.breakpoints.down('tablet')); 
    return (
        <Box sx={{background: theme.palette.roundColor.main, borderRadius: "10px", paddingInline: "15px", display: "flex", justifyContent: "center"}}>
            <Box>
                <Typography sx={{
                    color: theme.palette.roundColor.secondary, 
                    fontFamily: theme.typography.font3.fontFamily, 
                    fontSize: `${isMobile ? "2.4rem" : "3rem"}`}}
                >
                    {currentRound}/{lastRound}
                </Typography>     
            </Box>
        </Box>
    )
}