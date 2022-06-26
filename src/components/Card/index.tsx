import { Box, Typography } from "@mui/material";

type CardProps = {
  children: string;
  titulo: string;
};

function Card(props: CardProps) {
  return (
    <>
      <Box
        sx={{
          padding: "20%",
        }}
      >
        <Typography variant="h4">{props.titulo}</Typography>
        <Typography variant="body1">{props.children}</Typography>
      </Box>
    </>
  );
}

export default Card;
