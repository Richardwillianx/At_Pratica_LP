import { Box, Grid } from "@mui/material";
import Card from "../../components/Card";
import CardImage from "../../components/CardImage";

function Landing() {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Card titulo="Landing Page">Atividade Prática</Card>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={6}>
          <Card titulo="React Native">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            consequuntur ea voluptates amet veritatis tempora cumque, aliquid
            suscipit hic molestiae tenetur reprehenderit voluptatem neque non
            similique pariatur nemo a architecto eos. Reiciendis asperiores
            necessitatibus eveniet, dicta labore ipsam architecto.
            Exercitationem ducimus animi unde rem reiciendis odit delectus
            vitae, inventore consequuntur!
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardImage
              imageSrc="https://alonza.com.br/wp-content/uploads/2021/07/react-native.png"
              imageAlt="React Native"
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardImage
              imageSrc="https://files.tecnoblog.net/wp-content/uploads/2021/09/iphone-13-produto-2.png"
              imageAlt="Iphone 13 Pro Max"
            />
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Card titulo="Iphone 13 Pro Max ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            consequuntur ea voluptates amet veritatis tempora cumque, aliquid
            suscipit hic molestiae tenetur reprehenderit voluptatem neque non
            similique pariatur nemo a architecto eos. Reiciendis asperiores
            necessitatibus eveniet, dicta labore ipsam architecto.
            Exercitationem ducimus animi unde rem reiciendis odit delectus
            vitae, inventore consequuntur!
          </Card>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={6}>
          <Card titulo="WhatsApp">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            consequuntur ea voluptates amet veritatis tempora cumque, aliquid
            suscipit hic molestiae tenetur reprehenderit voluptatem neque non
            similique pariatur nemo a architecto eos. Reiciendis asperiores
            necessitatibus eveniet, dicta labore ipsam architecto.
            Exercitationem ducimus animi unde rem reiciendis odit delectus
            vitae, inventore consequuntur!
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardImage
              imageSrc="https://t2.tudocdn.net/600514?w=1920&h=1440"
              imageAlt="WhatsApp"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Landing;
