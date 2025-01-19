/* eslint-disable react/prop-types */
import React, { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ContextProvider = ({ children }) => {
  const theme = useMemo(() =>
    createTheme({
      components: {
        MuiTypography: {
          variants: [
            {
              props: { variant: "subtitle1" },
              style: {
                color: "var(--mega-color-gray500)",
              },
            },
            {
              props: { variant: "subtitle2" },
              style: {
                color: "var(--mega-color-gray400)",
                fontWeight: 700,
              },
            },

            {
              props: { variant: "body1" },
              style: {
                fontWeight: 400,
                fontSize: "16px",
              },
            },
          ],
          styleOverrides: {
            root: {
              lineSpacing: 0,
              letterSpacing: 0,
              color: "var(--mega-color-gray)",
            },
          },
        },

        MuiIconButton: {
          styleOverrides: {
            root: {
              disableRipple: true,
              disableRippleFocus: true,
              padding: 0,
            },
          },
        },

        MuiTableCell: {
          styleOverrides: {
            root: {
              padding: "12px",
              "& .MuiTableCell-sizeSmall": {
                width: "100px",
                columnWidth: "200px",
              },
            },
          },
        },

        MuiTableRow: {
          styleOverrides: {
            root: {
              "&.MuiTableRow-hover:hover": {
                cursor: "pointer",
              },
            },
          },
        },

        MuiDataGrid: {
          styleOverrides: {
            root: {
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "inherit", // Or 'transparent' or whatever color you'd like
              },
            },
          },
        },

        MuiButton: {
          styleOverrides: {
            root: {
              padding: 0,
            },
          },
        },

        MuiButtonBase: {
          styleOverrides: {
            root: {
              disableRipple: true,
              padding: 0,
            },
          },
        },
      },
    })
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { ContextProvider };
