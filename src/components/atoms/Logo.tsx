import { Box } from "@mui/material";

export default function Logo() {
  return (
    <Box
      component="img"
      sx={{
        height: "auto",
        width: "auto",
        maxHeight: { xs: 200, md: "100%", lg: "100%" },
        maxWidth: { xs: 200, md: "100%", lg: "100%" },
        marginTop: 6
      }}
      alt="adversea"
      src="/adversea_logo.svg"
    />
  )
}