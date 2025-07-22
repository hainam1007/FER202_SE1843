import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Switch,
  Box,
  MenuItem,
} from "@mui/material";
import { useTheme } from "../../contexts/ThemeContext";

function FormContact() {
  const { colors } = useTheme();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      program: "",
      message: "",
      agree: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      email: Yup.string().required("Required.").email("Invalid email"),
      phone: Yup.string()
        .required("Required.")
        .matches(/^[0-9]{10,15}$/, "Phone must be 10-15 digits"),
      program: Yup.string().required("Please select a program."),
      message: Yup.string()
        .required("Required.")
        .min(10, "Must be 10 characters or more"),
      agree: Yup.boolean().oneOf(
        [true],
        "The terms and conditions must be accepted."
      ),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        width: "100%",
        maxWidth: "none",
        mx: 0,
        p: 2,
        background: colors.surface,
        borderRadius: 2,
        color: colors.text,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          color: colors.primary,
          fontWeight: 700,
          mb: 3,
          letterSpacing: 1,
        }}
      >
        Contact Form
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: colors.background,
            color: colors.text,
            "& fieldset": {
              borderColor: colors.border,
            },
            "&:hover fieldset": {
              borderColor: colors.primary,
            },
            "&.Mui-focused fieldset": {
              borderColor: colors.primary,
            },
          },
          "& .MuiInputLabel-root": {
            color: colors.textSecondary,
            "&.Mui-focused": {
              color: colors.primary,
            },
          },
        }}
      />
      {formik.errors.name && formik.touched.name && (
        <Typography variant="caption" color="red">
          {formik.errors.name}
        </Typography>
      )}

      <TextField
        fullWidth
        margin="normal"
        label="Email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: colors.background,
            color: colors.text,
            "& fieldset": {
              borderColor: colors.border,
            },
            "&:hover fieldset": {
              borderColor: colors.primary,
            },
            "&.Mui-focused fieldset": {
              borderColor: colors.primary,
            },
          },
          "& .MuiInputLabel-root": {
            color: colors.textSecondary,
            "&.Mui-focused": {
              color: colors.primary,
            },
          },
        }}
      />
      {formik.errors.email && formik.touched.email && (
        <Typography variant="caption" color="red">
          {formik.errors.email}
        </Typography>
      )}

      <TextField
        fullWidth
        margin="normal"
        label="Phone"
        name="phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: colors.background,
            color: colors.text,
            "& fieldset": {
              borderColor: colors.border,
            },
            "&:hover fieldset": {
              borderColor: colors.primary,
            },
            "&.Mui-focused fieldset": {
              borderColor: colors.primary,
            },
          },
          "& .MuiInputLabel-root": {
            color: colors.textSecondary,
            "&.Mui-focused": {
              color: colors.primary,
            },
          },
        }}
      />
      {formik.errors.phone && formik.touched.phone && (
        <Typography variant="caption" color="red">
          {formik.errors.phone}
        </Typography>
      )}

      <TextField
        select
        fullWidth
        margin="normal"
        label="Program of Study"
        name="program"
        value={formik.values.program}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: colors.background,
            color: colors.text,
            "& fieldset": {
              borderColor: colors.border,
            },
            "&:hover fieldset": {
              borderColor: colors.primary,
            },
            "&.Mui-focused fieldset": {
              borderColor: colors.primary,
            },
          },
          "& .MuiInputLabel-root": {
            color: colors.textSecondary,
            "&.Mui-focused": {
              color: colors.primary,
            },
          },
        }}
      >
        <MenuItem value="">
          <em>Please select</em>
        </MenuItem>
        <MenuItem value="1">Software Engineering</MenuItem>
        <MenuItem value="2">Information System</MenuItem>
        <MenuItem value="3">Information Assurance</MenuItem>
        <MenuItem value="4">Internet of Things</MenuItem>
        <MenuItem value="5">Artificial Intelligence</MenuItem>
        <MenuItem value="6">Digital Art & Design</MenuItem>
      </TextField>
      {formik.errors.program && formik.touched.program && (
        <Typography variant="caption" color="red">
          {formik.errors.program}
        </Typography>
      )}

      <TextField
        fullWidth
        margin="normal"
        label="Message"
        name="message"
        multiline
        rows={4}
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: colors.background,
            color: colors.text,
            "& fieldset": {
              borderColor: colors.border,
            },
            "&:hover fieldset": {
              borderColor: colors.primary,
            },
            "&.Mui-focused fieldset": {
              borderColor: colors.primary,
            },
          },
          "& .MuiInputLabel-root": {
            color: colors.textSecondary,
            "&.Mui-focused": {
              color: colors.primary,
            },
          },
        }}
      />
      {formik.errors.message && formik.touched.message && (
        <Typography variant="caption" color="red">
          {formik.errors.message}
        </Typography>
      )}

      <FormControlLabel
        control={
          <Switch
            name="agree"
            checked={formik.values.agree}
            onChange={formik.handleChange}
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: colors.primary,
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: colors.primary,
              },
            }}
          />
        }
        label="Agree to terms and conditions."
        sx={{
          "& .MuiFormControlLabel-label": {
            color: colors.text,
          },
        }}
      />
      {formik.errors.agree && formik.touched.agree && (
        <Typography variant="caption" color="red">
          {formik.errors.agree}
        </Typography>
      )}

      <Button
        fullWidth
        variant="contained"
        type="submit"
        sx={{
          mt: 2,
          fontWeight: "bold",
          letterSpacing: 2,
          backgroundColor: colors.primary,
          "&:hover": { backgroundColor: colors.secondary },
        }}
      >
        SEND
      </Button>
    </Box>
  );
}

export default FormContact;
