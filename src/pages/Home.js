import { Box, Container, Typography } from "@mui/material"

function Home() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="5" component="h1">
          Welcome To Multi Project App
        </Typography>
      </Box>
    </Container>
  )
}

export default Home
