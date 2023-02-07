// Path: src/components/page.tsx
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactNode } from "react";

const PageHeader = styled("header")(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const PageContent = styled("main")(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const PageFooter = styled("footer")(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

interface PageProps {
  title: string;
  children: ReactNode;
}

export default function Page({ title, children }: PageProps) {
  return (
    <Container maxWidth="md">
      <PageHeader>
        <Typography variant="h4" component="h1" gutterBottom>
          {title}
        </Typography>
      </PageHeader>
      <PageContent>{children}</PageContent>
      <PageFooter>
        <Typography variant="body2" color="textSecondary" align="center">
          Footer
        </Typography>
      </PageFooter>
    </Container>
  );
}
